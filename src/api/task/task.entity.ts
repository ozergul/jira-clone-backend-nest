import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateAudit } from '../../shared/entities';
import { Lov } from '../lov/lov.entity';

@Entity('tasks')
export class Task extends DateAudit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  taskId: string;

  @Column('text')
  title: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('int')
  reporterId: number;

  @Column('int', { nullable: true })
  assigneeId: number;

  @ManyToOne(
    type => Lov,
    lov => lov.id,
  )
  @JoinTable()
  type: Lov;

  @Column('int')
  projectId: number;

  @ManyToOne(
    type => Lov,
    lov => lov.id,
  )
  @JoinTable()
  priority: Lov;
}
