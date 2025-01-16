import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Request } from 'express';

export const User = (...args: string[]) => SetMetadata('user', args);

export const UserParamsId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    console.log(data);
    const req: Request = ctx.switchToHttp().getRequest();
    const id = req.params.id;
    return id;
  },
);
