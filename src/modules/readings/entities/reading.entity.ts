import { SensorEntity } from 'src/modules/sensor/entities/sensor.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ReadingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  temp: number;

  @CreateDateColumn({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => SensorEntity, (sensor) => sensor.readings)
  sensor: SensorEntity;
}
