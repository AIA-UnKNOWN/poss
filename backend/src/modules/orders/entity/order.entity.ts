import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/helpers/entity.helper';
import { Product } from 'src/modules/products/entity/product.entity';
import { Transaction } from 'src/modules/transactions/entity/transaction.entity';

@Entity('orders')
export class Order extends BaseEntity {
  @ManyToOne(() => Product, (product) => product.orders, {
    onDelete: 'SET NULL',
  })
  product: Product;

  @ManyToOne(() => Transaction, (transaction) => transaction.orders, {
    cascade: true,
  })
  transaction: Transaction;

  @Column({ nullable: false })
  quantiy: number;
}
