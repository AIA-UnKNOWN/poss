import { DataSource } from 'typeorm';
import { User } from '../users/entity/user.entity';

const dataSource = new DataSource({
  type: 'mysql',
  host: '172.17.0.1',
  port: 3306,
  username: 'root',
  password: 'AjboyIan_321',
  database: 'poss',
  entities: [
    User,
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