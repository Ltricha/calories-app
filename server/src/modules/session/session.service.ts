import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './entities/session.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entitites/user.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) { }

  /**
   * Gets a session from user.
   * @param user
   * @returns
   */
  public async getSession(user: User) {
    try {
      return await this.sessionRepository.findOneBy({
        user: user,
      });
    } catch (error) {
      console.log('Something went wrong:' + error);
      return null;
    }
  }

  /**
   * Create a new session.
   * @param email
   * @returns
   */
  public async createSession(user: User) {
    // Check if a session already exist first.
    const session: Session | null = await this.getSession(user);

    if (session) {
      await this.deleteSession(session.id);
    }

    try {
      const uuid: string = crypto.randomUUID();

      await this.sessionRepository.insert({
        id: uuid,
        expiryDate: 30,
        user,
      });

      return uuid;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async deleteSession(token: string) {

    await this.sessionRepository.delete({
      id: token,
    });
  }
}
