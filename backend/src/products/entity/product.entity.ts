import { Entity, Column, ManyToOne } from 'typeorm';
import { Category } from 'src/categories/entity/category.entity';
import { BaseEntity } from 'src/helpers/entity.helper';

@Entity('products')
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column('longtext', {
    nullable: true,
  })
  description: string;

  @Column({ nullable: true })
  code: string;

  @Column({ default: 0 })
  quantity: number;

  @Column({ nullable: true })
  photoUrl: string;

  @ManyToOne(
    () => Category,
    category => category.products,
    { onDelete: 'SET NULL' }
  )
  category: Category;
}