import { registerAs } from '@nestjs/config';

export default registerAs('config', async () => {
  const database = {
    type: 'postgres' as any,
    host: 'localhost',
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    entities: [`${process.cwd()}/dist/**/*.entity{.ts,.js}`],
  };
  const config = {
    database,
  };
  return config;
});
