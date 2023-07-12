import { Inject, Injectable } from '@nestjs/common';
import { Transaction } from './entity/transaction.entity';
import { TRANSACTION_REPOSITORY } from './transactions.provider';
import { Repository } from 'typeorm';
import { TransactionDto } from './transactions.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }

  create(transactionData: TransactionDto): Promise<Transaction> {
    const transaction = new Transaction();
    Object.assign(transaction, transactionData);
    return this.transactionsRepository.save(transaction);
  }
}
