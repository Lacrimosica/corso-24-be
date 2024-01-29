import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    this.cats.push({ id: 1, name: 'Cat 1', age: 1 });
    this.cats.push({ id: 2, name: 'Cat 2', age: 2 });
    this.cats.push({ id: 3, name: 'Cat 3', age: 3 });
  }

  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat {
    const cat = this.cats.find((cat) => cat.id === id);
    return cat;
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  update(id: number, updatedCat: Cat) {
    this.cats.map((cat) => {
      if (cat.id === id) {
        cat.age = updatedCat.age;
        cat.name = updatedCat.name;
        return cat;
      } else {
        return cat;
      }
    });
    return this.cats;
  }

  delete(id: number) {
    const catIndex = this.cats.findIndex((cat) => cat.id === id);
    const cat = this.cats[catIndex];
    this.cats.splice(catIndex, 1);
    return;
  }
}

export interface Cat {
  id: number;
  name: string;
  age: number;
}
