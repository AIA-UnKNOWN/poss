import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ORDER_REPOSITORY } from './orders.provider';
import { InsertResult, Repository } from 'typeorm';
import { Order } from './entity/order.entity';
import { OrderDto } from './orders.dto';
import { PRODUCT_REPOSITORY } from '../products/products.provider';
import { Product } from '../products/entity/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDER_REPOSITORY)
    private ordersRepository: Repository<Order>,
    @Inject(PRODUCT_REPOSITORY)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  async bulkCreate(orders: OrderDto[]): Promise<InsertResult> {
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

    const insertResult = await this.ordersRepository
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

    const insertedOrderIds = insertResult.identifiers.map((order) => order.id);
    await Promise.all(
      insertedOrderIds.map(async (insertedOrderId) => {
        const order = await this.ordersRepository.findOne({
          where: {
            id: insertedOrderId,
          },
          relations: {
            product: true,
          },
        });
        const product = await this.productsRepository.findOneBy({
          id: order.product.id,
        });
        product.quantity = product.quantity - order.quantiy;
        await this.productsRepository.save(product);
        return order;
      }),
    );

    return insertResult;
  }
}
