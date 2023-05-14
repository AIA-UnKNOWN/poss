import { Module } from '@nestjs/common';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';
// Modules
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { DatabaseModule } from './database/database.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { PhotosModule } from './modules/photos/photos.module';
import { OrdersModule } from './modules/orders/orders.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    ProductsModule,
    CategoriesModule,
    PhotosModule,
    OrdersModule,
    TransactionsModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
