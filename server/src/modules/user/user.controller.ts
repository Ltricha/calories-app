import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get('/me')
  public async getUserBySession(@Res() res: Response, @Req() req: Request) {
    console.log(req.cookies);
    const user = await this.userService.getUserByToken(req.cookies['session-token']);
    res.send(user);
  }

  public getProfileByEmail() { }

  public updateProfile() { }
}
