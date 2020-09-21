import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LovType } from './enum';
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
  value: string;

  @Column('text')
  text: string;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
