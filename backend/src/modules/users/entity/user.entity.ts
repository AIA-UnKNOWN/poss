import { BaseEntity } from 'src/helpers/entity.helper';
import { Entity, Column } from 'typeorm';

@Entity("users")
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column()
  password: string;
}