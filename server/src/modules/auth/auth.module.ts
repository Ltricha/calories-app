import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SessionModule } from '../session/session.module';
import { User } from '../user/entitites/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User]), SessionModule],
    controllers: [AuthController],
    providers: [AuthService],
})


export class AuthModule { }