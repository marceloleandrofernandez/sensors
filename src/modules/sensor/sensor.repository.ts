import { DataSource, Repository } from 'typeorm';
import { SensorEntity } from './entities/sensor.entity';
import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Injectable()
export class SensorRepository extends Repository<SensorEntity> {
  constructor(private dataSource: DataSource) {
    super(SensorEntity, dataSource.createEntityManager());
  }
  async getSensorById(id: number): Promise<SensorEntity> {
    const response = await this.findOneBy({ id });
    return response;
  }
  async createOneSensor(createSensorDto: CreateSensorDto) {
    return await this.save(createSensorDto);
  }
  async getSensors() {
    return await this.find();
  }
  async deleteOneSensor(id: number) {
    return await this.delete({ id });
  }
  async updateOneSensor(id: number, updateSensorDto: UpdateSensorDto) {
    return await this.update(id, updateSensorDto);
  }
}
