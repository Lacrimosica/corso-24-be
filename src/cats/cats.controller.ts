import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Query } from '@nestjs/common';
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // @Post()
  // boh(@Body() createCatDto: CreateCatDto) {
  //   console.log('sono in boh');
  //   return;
  // return this.catsService.create(createCatDto);
  // }

  //nel caso in cui ci sono due endpoint/rotte con lo stesso indirizzo
  //che corrispondo con il nostro metodo HTTP e il nostro url
  //la richiesta finisce nell primo che trova nel codice

  // come accedere a campi/chiavi singoli del body
  // create(@Body('name') catName: string) {}
  // create(@Body('age') ageName: string) {}
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    return this.catsService.findAll(+page, +limit);
  }

  // @Get('test')
  // test(@Query() query: { page: string; limit: string }) {
  //   console.log('sono in test');
  //   return;
  //   // return this.catsService.findAll(+query.page, +query.limit);
  // }

  //i place-holder/param che vengono identificati con :{qualcosa} , prendenodo tutto
  //quello che c'è dopo il primo / dopo cats
  // @Get(':id/:test')
  // findOne(@Param('id') id: string) {
  //   console.log('sono in find one');
  //   console.log('this is the id:', id);
  //   return;
  // return this.catsService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
