import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LovService } from '../lov/lov.service';
import { LovType } from '../lov/enum';
import { CreateTaskConfig } from './models';
import { ProjectService } from '../project/project.service';

@ApiTags('ui')
@Controller('/ui')
export class UiController {
  constructor(private readonly lovService: LovService, private readonly projectService: ProjectService) {}

  @Get('/create-task')
  async createTask(): Promise<CreateTaskConfig> {
    const priorities = await this.lovService.findAllByType(LovType.TaskPriority);
    const types = await this.lovService.findAllByType(LovType.TaskType);
    const projects = await this.projectService.getAll();
    return {
      priorities,
      types,
      projects,
    };
  }
}
