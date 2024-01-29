import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, Cat } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Cat[] {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() cat: Cat) {
    this.appService.create(cat);
  }
}
