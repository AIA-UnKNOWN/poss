import { Get, Inject, Injectable } from '@nestjs/common';
import { Transaction } from './entity/transaction.entity';
import { TRANSACTION_REPOSITORY } from './transactions.provider';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  @Get()
  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }
}
