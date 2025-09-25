import { Repository } from 'typeorm';
import { User } from './entitites/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMapper } from './mappers/user.mapper';

export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  public async getUserByToken(token: string) {

    try {

      const user = await this.userRepository
        .createQueryBuilder('user')
        .innerJoin('user.session', 'session')
        .innerJoinAndSelect('user.profile', 'profile')
        .where('session.id = :sessionId', {
          sessionId: token,
        })
        .getOne();

      if (user) {
        const mapper = new UserMapper();
        return mapper.toUserInfoDTO(user);

      }

    } catch (error) {
      console.log(`Something went wrong ${error}`)
    }

  }

  public async getProfileByEmail(email: string) { }
}
