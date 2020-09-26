import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LovType, TaskPriority, TaskType } from './enum';
import { DateAudit } from '../../shared/entities';

@Entity('lovs')
export class Lov extends DateAudit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: LovType,
  })
  type: LovType;

  @Column('text')
  value: TaskPriority | TaskType;

  @Column('text')
  text: string;
}
