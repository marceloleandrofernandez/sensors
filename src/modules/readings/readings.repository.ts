import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ReadingEntity } from './entities/reading.entity';
import { CreateReadingDto } from './dto/create-reading.dto';
import { SensorService } from '../sensor/sensor.service';

@Injectable()
export class ReadingsRepository extends Repository<ReadingEntity> {
  constructor(
    private dataSource: DataSource,
    private readonly sensorService: SensorService,
  ) {
    super(ReadingEntity, dataSource.createEntityManager());
  }
  async createOneReading(createReadingDto: CreateReadingDto) {
    console.log(createReadingDto);
    const sensor = await this.sensorService.getSensorById(
      createReadingDto.sensorId,
    );
    if (!sensor) {
      throw Error('no exixte sensor');
    }
    return await this.save(createReadingDto);
  }

  async getReadingsById(id: number): Promise<ReadingEntity[]> {
    const response = await this.find({ where: { id } });
    return response;
  }
}
