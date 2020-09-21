import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateAudit } from '../../shared/entities';

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

  @Column('int')
  assigneeId: number;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
