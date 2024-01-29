import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    this.cats.push({ name: 'Cat 1', age: 1 });
    this.cats.push({ name: 'Cat 2', age: 2 });
    this.cats.push({ name: 'Cat 3', age: 3 });
  }
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }
}

export interface Cat {
  name: string;
  age: number;
}
