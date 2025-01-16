import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { AuthGuard } from './guard/auth.guard';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // MulterModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     dest: configService.get<string>('MULTER_DEST'),
    //   }),
    //   inject: [ConfigService],
    // }),
    MulterModule.register({
      //ascy siz
      dest: './upleads',
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [
    {
      provide: 'userRepo',
      useClass: UserRepository,
    },
    {
      provide: 'userSecret',
      useValue: 'qwer12345',
    },
    {
      provide: 'randomString',
      useFactory: () => {
        return Math.random();
      },
    },
    {
      provide: 'apiKey',
      useValue: 'qwertyui12345678dasffbgnfhr',
    },
    // {
    //   provide: 'userName',
    //   useValue: "name",
    // },
    UserRepository,
    UserService,
    AuthGuard,
  ],
  exports: ['userRepo', UserRepository, UserService],
})
export class UserModule {}
//   static forRoot(name: string): DynamicModule {
//     return {
//       module: UserModule,
//       controllers: [UserController],
//       providers: [
//         {
//           provide: 'userRepo',
//           useClass: UserRepository,
//         },
//         {
//           provide: 'userSecret',
//           useValue: 'qwer12345',
//         },
//         {
//           provide: 'randomString',
//           useFactory: () => {
//             return Math.random();
//           },
//         },
//         {
//           provide: 'apiKey',
//           useValue: 'qwertyui12345678dasffbgnfhr',
//         },
//         {
//           provide: 'userName',
//           useValue: name,
//         },
//         UserRepository,
//         UserService,
//       ],
//       exports: ['userName', UserRepository, UserService],
//     };
//   }
// }
