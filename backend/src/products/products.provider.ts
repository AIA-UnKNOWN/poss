import { DataSource } from 'typeorm';
import { Product } from './entity/product.entity';

export const PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY';
export const productProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: ['DATA_SOURCE'],
  }
];