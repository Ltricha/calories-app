import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitites/user.entity';
import { UserController } from './user.controller';
import { Profile } from './entitites/profile.entity';
import { Session } from '../session/entities/session.entity';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, Profile, Session])],
    providers: [UserService],
    controllers: [UserController],
    exports: [TypeOrmModule],
})
export class UsersModule { }
