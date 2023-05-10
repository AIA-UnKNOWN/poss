import { Controller, Post, Body, UseGuards } from '@nestjs/common';
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
    if (_.isEmpty(product)) {
      return {
        statusCode: 400,
        message: "Failed to create product due to empty payload",
        error: "Bad Request"
      };
    }

    try {
      return this.productsService.create(product);
    } catch(error) {
      return error;
    }
  }

}
