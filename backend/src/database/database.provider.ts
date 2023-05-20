import 'dotenv/config';
import { DataSource } from 'typeorm';

const getDataSource = (processEnv: NodeJS.ProcessEnv) => new DataSource({
  type: 'mysql',
  host: processEnv.DATABASE_HOST,
  port: parseInt(processEnv.DATABASE_PORT) || 3306,
  username: processEnv.DATABASE_USERNAME,
  password: processEnv.DATABASE_PASSWORD,
  database: processEnv.DATABASE_NAME,
  entities: ['dist/modules/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
  synchronize: ['dev', 'development'].includes(processEnv.APP_ENV),
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return getDataSource(process.env).initialize();
    },
  },
];

export default getDataSource(process.env);