import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "src/helpers/entity.helper";
import { User } from "src/modules/users/entity/user.entity";
import { Order } from "src/modules/orders/entity/order.entity";

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

  @OneToMany(
    () => Order,
    order => order.transaction,
  )
  orders: Order[];
}