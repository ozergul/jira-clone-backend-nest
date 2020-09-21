import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UiController } from './ui.controller';
import { LovService } from '../lov/lov.service';
import { Lov } from '../lov/lov.entity';
import { ProjectService } from '../project/project.service';
import { Project } from '../project/project.entity';
import { SharedModule } from '../../shared';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Lov, Project])],
  controllers: [UiController],
  providers: [LovService, ProjectService],
})
export class UiModule {}
