import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UiController } from './ui.controller';
import { LovService } from '../lov/lov.service';
import { Lov } from '../lov/lov.entity';
import { ProjectService } from '../project/project.service';
import { Project } from '../project/project.entity';
import { SharedModule } from '../../shared';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task.entity';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Lov, Project, Task])],
  controllers: [UiController],
  providers: [LovService, ProjectService, TaskService],
})
export class UiModule {}
