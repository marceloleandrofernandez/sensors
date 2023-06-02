import { ReadingEntity } from 'src/modules/readings/entities/reading.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class SensorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sensorName: string;

  @Column()
  sensorDescription: string;

  @OneToMany(() => ReadingEntity, (readings) => readings.sensor)
  readings: ReadingEntity[];
}
