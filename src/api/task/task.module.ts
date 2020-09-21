import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { SharedModule } from '../../shared';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
