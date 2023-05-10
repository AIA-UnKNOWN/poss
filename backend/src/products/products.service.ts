import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { PRODUCT_REPOSITORY } from './products.provider';

@Injectable()
export class ProductsService {

  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private productsService: Repository<Product>,
  ) {}

}
