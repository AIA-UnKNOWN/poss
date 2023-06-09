import { DataSource } from "typeorm";
import { Role } from "./entity/role.entity";

export const ROLE_REPOSITORY = 'ROLE_REPOSITORY';
export const roleProviders = [
  {
    provide: ROLE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Role),
    inject: ['DATA_SOURCE'],
  }
];