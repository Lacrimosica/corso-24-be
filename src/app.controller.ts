import { Controller, Get, HttpException } from '@nestjs/common';
import { AppService } from './app.service';

import { v1, v3, v4, v5 } from 'uuid';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  ping() {
    return 'pong';
  }
}
