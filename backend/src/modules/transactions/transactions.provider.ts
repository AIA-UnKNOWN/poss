import { DataSource } from "typeorm";
import { Transaction } from "./entity/transaction.entity";

export const TRANSACTION_REPOSITORY = 'TRANSACTION_REPOSITORY';
export const transactionProviders = [
  {
    provide: TRANSACTION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Transaction),
    inject: ['DATA_SOURCE'],
  }
];