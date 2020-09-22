import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateAudit } from '../../shared/entities';

@Entity('projects')
export class Project extends DateAudit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  code: string;

  @Column('text')
  title: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('boolean', { default: false })
  isCompleted: boolean;

  @Column('int')
  createdBy: number;
}
