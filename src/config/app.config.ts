import { registerAs } from '@nestjs/config';

export default registerAs('config', async () => {
  const database = {
    type: 'postgres' as any,
    host: 'localhost',
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: 'postgres',
    entities: [`${process.cwd()} src/**/*.entity.{ts,js}`],
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  };
  const config = {
    database,
  };
  console.log('asfasdfasdf', config);
  return config;
});
