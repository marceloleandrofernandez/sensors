import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorModule } from './modules/sensor/sensor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorEntity } from './modules/sensor/entities/sensor.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [SensorEntity],
      autoLoadEntities: true,
      synchronize: true,
    }),
    SensorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
