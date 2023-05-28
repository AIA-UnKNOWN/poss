import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {}
