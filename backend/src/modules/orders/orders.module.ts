import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DatabaseModule } from 'src/database/database.module';
import { orderProviders } from './orders.provider';
import { productProviders } from '../products/products.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...orderProviders, ...productProviders, OrdersService],
  controllers: [OrdersController],
  exports: [OrdersService],
})
export class OrdersModule {}
