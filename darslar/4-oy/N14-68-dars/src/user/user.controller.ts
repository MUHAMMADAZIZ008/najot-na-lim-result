import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MyCostumError } from 'src/exceptions/custom';
import { HttpExceptionFilter } from 'src/exceptions/http-exceptoin-fillter';

@Controller('user')
export class UserController {
  private readonly logger = new Logger('User');
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    this.logger.log('HELLO NESTJS');
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    throw new MyCostumError();
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
