import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { SensorEntity } from './entities/sensor.entity';
import { SensorRepository } from './sensor.repository';

@Injectable()
export class SensorService {
  constructor(private readonly sensorRepository: SensorRepository) {}

  async getSensorById(id: number): Promise<SensorEntity> {
    const getedSensor = await this.sensorRepository.getSensorById(id);
    return getedSensor;
  }
  async create(createSensorDto: CreateSensorDto): Promise<SensorEntity> {
    const createdSensor =
      this.sensorRepository.createOneSensor(createSensorDto);
    return createdSensor;
  }

  public find() {
    return this.sensorRepository.find();
  }

  public update(id: number, updateSensorDto: UpdateSensorDto) {
    return this.sensorRepository.updateOneSensor(id, updateSensorDto);
  }

  public remove(id: number) {
    return this.sensorRepository.deleteOneSensor(id);
  }
}
