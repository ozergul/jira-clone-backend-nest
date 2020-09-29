import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { SharedModule } from '../../shared';
import { Lov } from '../lov/lov.entity';
import { LovService } from '../lov/lov.service';
import { Project } from '../project/project.entity';
import { ProjectService } from '../project/project.service';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Task, Lov, Project])],
  controllers: [TaskController],
  providers: [TaskService, LovService, ProjectService],
})
export class TaskModule {}
