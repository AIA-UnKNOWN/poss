import {
  Injectable,
  Inject,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { DeleteResult, FindManyOptions, Repository } from 'typeorm';
import * as _ from 'lodash';
import { Product } from './entity/product.entity';
import { PRODUCT_REPOSITORY } from './products.provider';
import { FindAllFilter, ProductDto } from './products.dto';
import { CATEGORY_REPOSITORY } from 'src/modules/categories/categories.provider';
import { Category } from 'src/modules/categories/entity/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private productsRepository: Repository<Product>,
    @Inject(CATEGORY_REPOSITORY)
    private categoriesRepository: Repository<Category>,
  ) {}

  async findOne(productId: number): Promise<Product> {
    const product = await this.productsRepository.findOneBy({ id: productId });
    if (!product) throw new NotFoundException('No product found');
    return product;
  }

  async create(productData: ProductDto): Promise<Product> {
    if (_.isEmpty(productData))
      throw new BadRequestException(
        'Failed to create product due to empty payload',
      );
    if (!productData.categoryId)
      return this.productsRepository.save(productData);
    const category = await this.categoriesRepository.findOneBy({
      id: productData.categoryId,
    });
    const product = new Product();
    product.name = productData.name;
    product.description = productData.description;
    product.code = productData.code;
    product.quantity = productData.quantity;
    product.photoUrl = productData.photoUrl;
    product.category = category;
    return this.productsRepository.save(product);
  }

  findAll(filter?: FindAllFilter): Promise<Product[]> {
    return this.productsRepository.find({
      where: {
        category: filter.categoryId
          ? {
              id: filter.categoryId,
            }
          : undefined,
      },
    });
  }

  remove(productId: number): Promise<DeleteResult> {
    return this.productsRepository.delete(productId);
  }

  async update(productData: Product) {
    if (_.isEmpty(productData))
      throw new BadRequestException(
        'Failed to update product due to empty payload',
      );
    await this.productsRepository.save(productData);
  }
}
