import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repsository/user.repository';

@Injectable()
export class UserService {
  // constructor(private readonly userRepsitory: UserRepository) {}
  @Inject('apiKey')
  apiKey: string;
  constructor(
    @Inject('userRepo') private readonly userRepsitory: UserRepository,
    @Inject('userSecret') private readonly userValu: string,
    @Inject('random') private readonly random: any,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.random;
  }

  findAll() {
    return this.userRepsitory.findAll();
  }

  findOne(id: number) {
    return this.userValu;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.apiKey;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
