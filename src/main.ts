import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PaginationMiddleware } from './common/pagination.middleware';
import { Request, Response, NextFunction } from 'express';
import { ValidationPipe } from '@nestjs/common';

//middleware globali che sono funzioni invece di classi come PaginationMiddleware
//che viene applicato in app.module.ts
//i middleware dentro il main.ts vengono eseuiti prima di quelli dentro app.module.ts
//e vengono eseguiti in ordine di come sono messi
//i middleware globali sono applicati a tutte le rotte
export function simpleLoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // console.log(`This is the loggers`);
  next();
}

export function secondSimpleLogger(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // console.log(`This is The second logger`);
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(secondSimpleLogger, simpleLoggerMiddleware);

  //per abbilitare l'uso di vari decorator di validazione
  //tipo, @IsString(), @IsNumber(), @IsOptional(), @IsNotEmpty()
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();

