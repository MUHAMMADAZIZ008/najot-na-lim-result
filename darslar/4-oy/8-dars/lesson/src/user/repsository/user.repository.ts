import { ClassSerializerInterceptor, Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  findAll() {
    return ['Samandar', 'Bekzodbek', 'Temur'];
  }
}
