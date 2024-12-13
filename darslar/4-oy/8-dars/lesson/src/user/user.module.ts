import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repsository/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'userRepo',
      useClass: UserRepository,
    },
    {
      provide: 'userSecret',
      useValue: 'qwer',
    },
    {
      provide: 'random',
      useFactory: () => {
        return Math.random();
      },
    },
    {
      provide: 'apiKey',
      useValue: 'aslkdfjalsdkjdf',
    },
    UserService,
  ],
})
export class UserModule {}
