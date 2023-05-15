import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/helpers/entity.helper";
import { User } from "src/modules/users/entity/user.entity";

export enum UserRole {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
  CASHIER = 'cashier',
  CUSTOMER = 'customer',
};

@Entity('roles')
export class Role extends BaseEntity {
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CUSTOMER,
  })
  name: UserRole;

  @OneToMany(
    () => User,
    user => user.role,
  )
  users: User[];
}