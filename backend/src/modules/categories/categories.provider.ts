import { DataSource } from 'typeorm';
import { Category } from './entity/category.entity';

export const CATEGORY_REPOSITORY = 'CATEGORY_REPOSITORY';
export const categoryProviders = [
  {
    provide: CATEGORY_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: ['DATA_SOURCE'],
  }
];