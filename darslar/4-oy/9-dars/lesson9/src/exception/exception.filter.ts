import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class ExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {}
}
