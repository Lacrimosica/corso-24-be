import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService, Cat } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Cat[] {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Cat {
    return this.appService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() cat: Cat) {
    return this.appService.update(+id, cat);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.appService.delete(+id);
  }

  @Post()
  create(@Body() cat: Cat) {
    return this.appService.create(cat);
  }
}
