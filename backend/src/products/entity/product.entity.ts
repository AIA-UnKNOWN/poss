import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

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

  @UpdateDateColumn()
  updatedDate: Date;
  
  @CreateDateColumn()
  createdDate: Date;
}