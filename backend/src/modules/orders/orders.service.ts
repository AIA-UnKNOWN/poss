import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ORDER_REPOSITORY } from './orders.provider';
import { InsertResult, Repository } from 'typeorm';
import { Order } from './entity/order.entity';
import { OrderDto } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDER_REPOSITORY)
    private ordersRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  bulkCreate(orders: OrderDto[]): Promise<InsertResult> {
    const hasRequiredOrderProps = (order: OrderDto) =>
      order.productId !== undefined &&
      typeof order.productId === 'number' &&
      order.transactionId !== undefined &&
      typeof order.transactionId === 'number' &&
      order.quantity !== undefined &&
      typeof order.quantity === 'number';

    if (!Array.isArray(orders))
      throw new BadRequestException('orders should be an array');
    if (orders.length === 0)
      throw new BadRequestException('orders should not be empty');
    if (!orders.every(hasRequiredOrderProps))
      throw new BadRequestException(
        `Failed to bulk create due to incorrect payload. Each order should include 'productId', 'transactionId', and 'quantity' properties`,
      );

    return this.ordersRepository
      .createQueryBuilder()
      .insert()
      .values(
        orders.map((order) => ({
          transaction: {
            id: order.transactionId,
          },
          product: {
            id: order.productId,
          },
          quantiy: order.quantity,
        })),
      )
      .execute();
  }
}
