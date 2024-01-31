import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Request, Response } from 'express';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    // console.log(req.headers);
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.query);
    const param = req.query as { page: string; limit: string };
    if (!param?.page) {
      param.page = '0';
    }
    if (!param?.limit) {
      param.limit = '10';
    }
    // console.log(param);
    next();
  }
}
