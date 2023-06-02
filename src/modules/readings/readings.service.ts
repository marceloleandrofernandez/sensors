import { Injectable } from '@nestjs/common';
import { CreateReadingDto } from './dto/create-reading.dto';
import { ReadingsRepository } from './readings.repository';

@Injectable()
export class ReadingsService {
  constructor(private readonly readingRepository: ReadingsRepository) {}
  async createOneReading(createReadingDto: CreateReadingDto) {
    console.log(createReadingDto);
    return await this.readingRepository.createOneReading(createReadingDto);
  }

  async getAllReadingsFromOneSensor(id: number) {
    return await this.readingRepository.getReadingsById(id);
  }
}
