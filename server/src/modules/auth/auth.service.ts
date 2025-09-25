import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entitites/user.entity';
import { IAuthService } from './interfaces/auth.service.interface';
import { LoginUserDTO } from './dto/login-user.dto';
import { SessionService } from '../session/session.service';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly sessionService: SessionService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  /**
   * A login functions that calls another function to validate the credentials
   * @param loginUserDTO
   * @returns
   */
  public login(loginUserDTO: LoginUserDTO): Promise<string | null> {
    const session = this.validateUser(loginUserDTO);
    return session;
  }

  /**
   * 
   * @param token 
   */
  public async logout(token: string): Promise<void> {
    await this.sessionService.deleteSession(token);

  }


  /**
   * Validates the credentials of the users.
   * @param loginUserDTO
   * @returns
   */
  private async validateUser(loginUserDTO: LoginUserDTO) {
    // Checks if the credentials exist in the database.
    const credentials: User | null = await this.userRepository.findOneBy({
      email: loginUserDTO.email,
      password: loginUserDTO.password,

    });

    // If the credentials exist in the database then create a session them if not return null.
    if (credentials) {

      return this.sessionService.createSession(credentials);
    } else {
      return null;
    }
  }
}
