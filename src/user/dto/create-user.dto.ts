import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsStrongPassword()
  password: string;

  @IsString()
  @IsOptional()
  token: string;
}
