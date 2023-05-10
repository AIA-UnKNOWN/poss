import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import * as _ from 'lodash';
import { ProductDto } from './products.dto';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {

  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Post()
  create(@Body() product: ProductDto) {
    return this.productsService.create(product);
  }

  @Get(':productId')
  findOne(@Param('productId') productId: number) {
    return this.productsService.findOne(productId);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

}
