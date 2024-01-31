import {
  Injectable,
  MethodNotAllowedException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatEntity } from './entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { NoContentExcpeption } from 'src/common/no-content.exception';
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
    const cats = await this.catRepository.find(
      //limit/take/quanti prendere : 10
      //skip : quanti da skippare

      //page :0 da skippare 0
      //page : 1 da skippare 10
      //page: 2 da skippare 20
      {
        skip: page * limit,
        take: limit,

        // where: {
        //   age: 90,
        // },
        //fare ordinamento prima di fare la paginazione,
        //l'elenco di risultati inziera o dal primo elemento o dall'ultimo

        // order: {
        //   id: 'DESC',
        // },

        //selezionare solo alcuni campi
        select: ['id', 'name'],
      },
    );

    //ordinamento in maniera descndente, fuori dal db
    cats.sort((a, b) => {
      //ordine decrescente
      return b.id - a.id;
      //ordine crescente
      //return a.id - b.id;
    });

    if (cats.length === 0) {
      throw new NoContentExcpeption();
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
