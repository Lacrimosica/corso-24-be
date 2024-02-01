import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { FindOptions, Repository } from 'typeorm';
import { CatEntity } from 'src/cats/entities/cat.entity';
import { LessThan } from 'typeorm';

@Injectable()
export class UserService {
  //FrontEnd <--> BackEnd: (controller ---> service ---> repository <---> entity <--typeorm--> database)

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  fixedToken = 'kjansldkubfbsdkòcjs<kfw.asdasdaiushdiasd.asdoahsdugaisuda';

  create(createUserDto: CreateUserDto) {
    createUserDto.token = this.fixedToken;
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find({
      select: ['userId', 'email', 'age'],
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { userId: id } });
  }

  findOneByAge(age: number) {
    return this.userRepository.find({
      where: {
        age: LessThan(age),
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ userId: id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ userId: id });
  }
}
