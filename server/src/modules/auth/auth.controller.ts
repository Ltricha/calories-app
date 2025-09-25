import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginUserDTO } from 'src/modules/auth/dto/login-user.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('me')
  public getEmailBySession(@Req() req: Request) {
    console.log(req.cookies);
    if (req.cookies) {
      return 'cookies';
    } else {
      return 'no cookies';
    }
  }

  @Post('register')
  public register() { }

  /**
   * Signs the user in by checking if a session has successfully been created.
   * @param loginUserDTO
   * @param res
   */
  @Post('login')
  public async login(@Body() loginUserDTO: LoginUserDTO, @Res() res: Response) {
    const session = await this.authService.login(loginUserDTO);

    if (session) {
      res.cookie('session-token', session, { sameSite: 'lax' });
      res.status(200).send('Success');
    } else {
      res.status(401).send('Login/email are incorrect.');
    }
  }

  /**
   * Signs the user out and removes the cookie.
   * @param req
   * @param res
   */
  @Delete('logout')
  public async logout(@Req() req: Request, @Res() res: Response) {
    const token: string = req.cookies['session-token'] as string;
    await this.authService.logout(token);
    res.clearCookie('session-token');
    return res.status(200).send('Logout successful');
  }

  @Put()
  public updateUser() { }

  @Delete()
  public deleteUser() { }

}
