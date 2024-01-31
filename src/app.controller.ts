import { Controller, Get, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomException } from './custom.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  ping() {
    // throw new HttpException('this is custom', 300);
    throw new CustomException();
  }
}
