import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { NestApplication } from '@nestjs/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap, timestamp } from 'rxjs/operators';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  logger: Logger = new Logger(UserInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    this.logger.log(`incoming request: ${req.method}, ${req.url}`);
    const now = Date.now();

    // return next
    //   .handle()
    //   .pipe(tap(() => this.logger.log(`Outging response ${Date.now() - now}`)));

    return next
      .handle()
      .pipe(map((data) => ({ ...data, timestamp: new Date() })));
  }
}

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  logger: Logger = new Logger(ExceptionInterceptor.name);
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((err) => {
        this.logger.log(`An Error occured: ${err.message}`);
        return throwError(new HttpException(err.message, 500));
      }),
    );
  }
}
