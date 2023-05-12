import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from './products.provider';
import { categoryProviders } from 'src/categories/categories.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [
    ...productProviders,
    ...categoryProviders,
    ProductsService,
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
