import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToMany } from 'typeorm';
import { Product } from 'src/products/entity/product.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @UpdateDateColumn()
  updatedDate: Date;
  
  @CreateDateColumn()
  createdDate: Date;

  @OneToMany(
    () => Product,
    product => product.category,
  )
  products: Product[];
}
