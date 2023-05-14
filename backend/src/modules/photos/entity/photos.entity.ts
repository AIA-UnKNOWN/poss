import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "src/helpers/entity.helper";
import { Product } from "src/modules/products/entity/product.entity";

@Entity('photos')
export class Photo extends BaseEntity {
  @Column()
  url: string;

  @ManyToOne(
    () => Product,
    product => product.photos,
  )
  product: Product;
}