import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column()
  password: string;
  
  @UpdateDateColumn()
  updatedDate: Date;
  
  @CreateDateColumn()
  createdDate: Date;
}