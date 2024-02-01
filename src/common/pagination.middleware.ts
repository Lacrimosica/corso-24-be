import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Request, Response } from 'express';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    //vari metodi per vedere le informazioni della richiesta
    // console.log(req.headers);
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.query);

    // console.log('middlewar', req.body);

    if (req.method === 'DELETE') {
      res.status(HttpStatus.METHOD_NOT_ALLOWED);
      res.json({ message: 'AL MOMENTO NON SI PUO CANCELLARE COSE' });
      res.send();
    }

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
