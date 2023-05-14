import { Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "src/helpers/entity.helper";
import { Product } from "src/modules/products/entity/product.entity";

@Entity('orders')
export class Order extends BaseEntity {
  @ManyToOne(
    () => Product,
    product => product.orders,
    { onDelete: 'SET NULL' }
  )
  product: Product;
}