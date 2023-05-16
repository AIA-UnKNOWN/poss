import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: '172.17.0.1',
  port: 3306,
  username: 'root',
  password: 'AjboyIan_321',
  database: 'poss',
  entities: ['dist/modules/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
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