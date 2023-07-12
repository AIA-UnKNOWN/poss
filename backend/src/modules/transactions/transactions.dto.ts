import { IsNotEmpty, IsNumber } from 'class-validator';

export class TransactionDto {
  @IsNotEmpty()
  @IsNumber()
  totalAmount: number;

  @IsNotEmpty()
  @IsNumber()
  amountReceived: number;

  @IsNotEmpty()
  @IsNumber()
  amountChange: number;
}
