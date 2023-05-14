import { DataSource } from 'typeorm';
import { User } from '../modules/users/entity/user.entity';
import { Product } from '../modules/products/entity/product.entity';
import { Category } from '../modules/categories/entity/category.entity';
import { Photo } from '../modules/photos/entity/photos.entity';
import { Order } from 'src/modules/orders/entity/order.entity';

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