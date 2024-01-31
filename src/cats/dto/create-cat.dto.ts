import { IsEnum, IsNumber, IsString } from 'class-validator';
import { RaceEnum } from '../enums/race.enum';
//deve'essere fatto npm install class-validator class-transformer
export class CreateCatDto {
  @IsString({
    message: 'Nome deve essere una stringa',
  })
  name: string;

  @IsNumber()
  age: number;

  @IsEnum(RaceEnum)
  race: RaceEnum;
}
