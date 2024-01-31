import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatEntity } from './entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CustomException } from 'src/custom.exception';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catRepository: Repository<CatEntity>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    let cat;
    cat = await this.catRepository.save(createCatDto);
    return this.findOne(cat.id);
  }

  async findAll(page: number, limit: number) {
    console.log('siamo in service : findAll');
    console.log('page: ' + page);
    console.log('limit: ' + limit);

    const cats = await this.catRepository.find(
      //limit/take/quanti prendere : 10
      //skip : quanti da skippare

      //page :0 da skippare 0
      //page : 1 da skippare 10
      //page: 2 da skippare 20
      {
        skip: page * limit,
        take: limit,
      },
    );

    if (cats.length === 0) {
      throw new HttpException({}, HttpStatus.NO_CONTENT);
    }
    return cats;
  }

  async findOne(catId: number) {
    const cat = await this.catRepository.findOne({
      where: {
        id: catId,
      },
    });

    if (!cat) {
      throw new NotFoundException(`Cat #${catId} not found`);
    }

    return cat;
  }

  update(catId: number, updateCatDto: UpdateCatDto) {
    this.findOne(catId);
    this.catRepository.update(
      {
        id: catId,
      },
      updateCatDto,
    );
    return this.findOne(catId);
  }

  async remove(catId: number) {
    await this.findOne(catId);
    this.catRepository.delete({ id: catId });
  }
}
