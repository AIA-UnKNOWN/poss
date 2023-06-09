import { DataSource } from 'typeorm';
import { Photo } from './entity/photos.entity';

export const PHOTO_REPOSITORY = 'PHOTO_REPOSITORY';
export const photoProviders = [
  {
    provide: PHOTO_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
    inject: ['DATA_SOURCE'],
  }
];