import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatEntity } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor() {
    this.cats.push({ id: 1, name: 'Cat 1', age: 1 });
    this.cats.push({ id: 2, name: 'Cat 2', age: 2 });
    this.cats.push({ id: 3, name: 'Cat 3', age: 3 });
  }

  private readonly cats: CatEntity[] = [];

  create(createCatDto: CreateCatDto) {
    this.cats.push(createCatDto);
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    const cat = this.cats.find((cat) => cat.id === id);
    return cat;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    this.cats.map((cat) => {
      if (cat.id === id) {
        cat.age = updateCatDto.age;
        cat.name = updateCatDto.name;
        return cat;
      } else {
        return cat;
      }
    });
    return this.cats;
  }

  remove(id: number) {
    const catIndex = this.cats.findIndex((cat) => cat.id === id);
    const cat = this.cats[catIndex];
    this.cats.splice(catIndex, 1);
    return;
  }
}
