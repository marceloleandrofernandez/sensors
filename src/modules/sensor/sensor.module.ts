import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorRepository } from './sensor.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SensorRepository])],
  controllers: [SensorController],
  providers: [SensorService, SensorRepository],
})
export class SensorModule {}
