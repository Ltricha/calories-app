import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/user/entitites/user.entity';
import { UsersModule } from './modules/user/user.module';
import { Session } from './modules/session/entities/session.entity';
import { Profile } from './modules/user/entitites/profile.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'dk33BNT7UUCczhs',
    database: 'calories_app',
    entities: [User, Session, Profile],
    synchronize: true,
  }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
