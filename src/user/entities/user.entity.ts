import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'user_id',
  })
  userId: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column({
    nullable: true,
  })
  age: number;

  @Column()
  password: string;

  @Column({
    name: 'token',
  })
  token: string;
}
