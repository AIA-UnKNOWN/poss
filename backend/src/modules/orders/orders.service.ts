import { Inject, Injectable } from '@nestjs/common';
import { ORDER_REPOSITORY } from './orders.provider';
import { Repository } from 'typeorm';
import { Order } from './entity/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDER_REPOSITORY)
    private ordersRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }
}
