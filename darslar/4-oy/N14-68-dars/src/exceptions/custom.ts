import { HttpException, HttpStatus } from '@nestjs/common';

export class MyCostumExecption extends HttpException {
  constructor(
    message: string,
    private readonly date: Date,
  ) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
    console.log({ date });
  }
}

export class MyCostumError extends HttpException {
  constructor() {
    super('BAD REQUEST', HttpStatus.BAD_REQUEST);
  }
}
