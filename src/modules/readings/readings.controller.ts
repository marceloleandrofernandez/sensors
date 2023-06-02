import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReadingsService } from './readings.service';
import { CreateReadingDto } from './dto/create-reading.dto';

@Controller('readings')
export class ReadingsController {
  constructor(private readonly readingsService: ReadingsService) {}

  @Post()
  create(@Body() createReadingDto: CreateReadingDto) {
    return this.readingsService.createOneReading(createReadingDto);
  }

  @Get(':id')
  findAllFromOneSensor(@Param('id') id: string) {
    return this.readingsService.getAllReadingsFromOneSensor(+id);
  }
}
