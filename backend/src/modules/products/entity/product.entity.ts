import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Category } from 'src/modules/categories/entity/category.entity';
import { BaseEntity } from 'src/helpers/entity.helper';
import { Photo } from 'src/modules/photos/entity/photos.entity';

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

  @Column({
    default: 0,
    nullable: true,
  })
  price: number;

  @Column({ nullable: true })
  photoUrl: string;

  @ManyToOne(
    () => Category,
    category => category.products,
    { onDelete: 'SET NULL' }
  )
  category: Category;

  @OneToMany(
    () => Photo,
    photo => photo.product,
    { cascade: true }
  )
  photos: Photo[];
}