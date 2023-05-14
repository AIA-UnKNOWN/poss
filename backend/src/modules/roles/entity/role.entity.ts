import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/helpers/entity.helper";

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
}