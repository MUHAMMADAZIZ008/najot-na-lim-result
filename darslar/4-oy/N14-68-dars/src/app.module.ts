import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DeleteMiddleware,
  LoggerMiddleware,
} from './middlewares/loger.middlewares';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://khkhamidullo:qwer1234@cluster0.rgtrd.mongodb.net/',
    ),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user');
    consumer.apply(DeleteMiddleware).forRoutes({
      path: 'user',
      method: RequestMethod.DELETE,
    });
  }
}
