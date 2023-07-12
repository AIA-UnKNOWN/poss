import {
  BadGatewayException,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { OrdersService } from './orders.service';
import { OrderDto } from './orders.dto';

@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Post('bulk')
  bulkCreate(@Body() orders: OrderDto[]) {
    return this.ordersService.bulkCreate(orders);
  }
}
