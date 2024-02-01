import { Controller, Get, HttpException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

import { v1, v3, v4, v5 } from 'uuid';
import { TokenGuard } from './common/token.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  @UseGuards(TokenGuard)
  ping() {
    return 'pong';
  }
}
