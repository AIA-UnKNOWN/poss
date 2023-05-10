import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as _ from 'lodash';
import { Product } from './entity/product.entity';
import { PRODUCT_REPOSITORY } from './products.provider';
import { ProductDto } from './products.dto';

@Injectable()
export class ProductsService {

  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private productsRepository: Repository<Product>,
  ) {}

  async findOne(productId: number): Promise<Product> {
    const product = await this.productsRepository.findOneBy({ id: productId });
    if (!product) throw new NotFoundException('No product found');
    return product;
  }

  async create(product: ProductDto): Promise<Product> {
    if (_.isEmpty(product)) throw new BadRequestException("Failed to create product due to empty payload");
    return this.productsRepository.save(product);
  }

}
