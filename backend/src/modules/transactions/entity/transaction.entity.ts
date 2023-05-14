import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "src/helpers/entity.helper";
import { User } from "src/modules/users/entity/user.entity";

@Entity('transactions')
export class Transaction extends BaseEntity {
  @Column({ default: 0 })
  totalAmount: number;

  @ManyToOne(
    () => User,
    user => user.transactions,
    { cascade: true }
  )
  user: User;
}