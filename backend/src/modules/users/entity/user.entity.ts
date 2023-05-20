import { BaseEntity } from 'src/helpers/entity.helper';
import { Role } from 'src/modules/roles/entity/role.entity';
import { Transaction } from 'src/modules/transactions/entity/transaction.entity';
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity("users")
export class User extends BaseEntity {
  @Column({
    unique: true,
  })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(
    () => Transaction,
    transaction => transaction.user,
  )
  transactions: Transaction[];

  @ManyToOne(
    () => Role,
    role => role.users,
    { onDelete: 'SET NULL' }
  )
  role: Role;
}