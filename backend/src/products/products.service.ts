import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { PRODUCT_REPOSITORY } from './products.provider';
import { ProductDto } from './products.dto';

@Injectable()
export class ProductsService {

  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private productsRepository: Repository<Product>,
  ) {}

  async create(product: ProductDto): Promise<Product> {
    return this.productsRepository.save(product);
  }

}
