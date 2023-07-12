import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { TransactionsService } from './transactions.service';
import { TransactionDto } from './transactions.dto';

@UseGuards(AuthGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Post()
  create(@Body() transactionData: TransactionDto) {
    return this.transactionsService.create(transactionData);
  }
}
