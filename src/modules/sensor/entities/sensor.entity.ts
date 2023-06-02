import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SensorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sensorName: string;

  @Column()
  sensorDescription: string;
}
