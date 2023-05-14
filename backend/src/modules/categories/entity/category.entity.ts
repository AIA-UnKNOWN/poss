import { Entity, Column, OneToMany } from 'typeorm';
import { Product } from 'src/modules/products/entity/product.entity';
import { BaseEntity } from 'src/helpers/entity.helper';

@Entity('categories')
export class Category extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(
    () => Product,
    product => product.category,
  )
  products: Product[];
}
