import { DataSource } from 'typeorm';
import { User } from 'src/modules/users/entity/user.entity';
import { Product } from 'src/modules/products/entity/product.entity';
import { Category } from 'src/modules/categories/entity/category.entity';
import { Photo } from 'src/modules/photos/entity/photos.entity';
import { Order } from 'src/modules/orders/entity/order.entity';
import { Transaction } from 'src/modules/transactions/entity/transaction.entity';

const dataSource = new DataSource({
  type: 'mysql',
  host: '172.17.0.1',
  port: 3306,
  username: 'root',
  password: 'AjboyIan_321',
  database: 'poss',
  entities: [
    User,
    Product,
    Category,
    Photo,
    Order,
    Transaction,
  ],
  synchronize: true,
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];

export default dataSource;