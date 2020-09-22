import bcryptjs from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateAudit } from '../../shared/entities';

@Entity('users')
export class User extends DateAudit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column('text')
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ type: 'text', default: 'tr-TR' })
  language: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcryptjs.hash(this.password, 10);
  }
}
