import { Module } from '@nestjs/common';
import { ReadingsService } from './readings.service';
import { ReadingsController } from './readings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReadingsRepository } from './readings.repository';
import { SensorService } from '../sensor/sensor.service';
import { SensorRepository } from '../sensor/sensor.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReadingsRepository])],
  controllers: [ReadingsController],
  providers: [
    ReadingsService,
    ReadingsRepository,
    SensorService,
    SensorRepository,
  ],
})
export class ReadingsModule {}
