import { DataSource } from "typeorm";
import { Order } from "./entity/order.entity";

export const ORDER_REPOSITORY = 'ORDER_REPOSITORY';
export const orderProviders = [
  {
    provide: ORDER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Order),
    inject: ['DATA_SOURCE'],
  }
];