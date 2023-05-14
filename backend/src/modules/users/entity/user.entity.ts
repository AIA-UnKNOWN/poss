import { BaseEntity } from 'src/helpers/entity.helper';
import { Transaction } from 'src/modules/transactions/entity/transaction.entity';
import { Entity, Column, OneToMany } from 'typeorm';

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

  @OneToMany(
    () => Transaction,
    transaction => transaction.user,
  )
  transactions: Transaction[];
}