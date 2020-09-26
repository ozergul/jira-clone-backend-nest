import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LovService } from '../lov/lov.service';
import { LovType } from '../lov/enum';
import { CreateTaskConfig, LoginHeader } from './models';
import { ProjectService } from '../project/project.service';
import { TaskService } from '../task/task.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user/user.entity';
import { Project } from '../project/project.entity';
import { State } from '../task/models';

@ApiTags('ui')
@Controller('/ui')
export class UiController {
  constructor(
    private readonly lovService: LovService,
    private readonly projectService: ProjectService,
    private readonly taskService: TaskService,
  ) {}

  @Get('/create-task')
  @UseGuards(AuthGuard('jwt'))
  async createTask(@Req() req): Promise<CreateTaskConfig> {
    const user = req.user as User;
    const priorities = await this.lovService.findAllByType(LovType.TASK_PRIORITY);
    const types = await this.lovService.findAllByType(LovType.TASK_TYPE);
    const projects = await this.last3Projects(user.id);
    return {
      priorities,
      types,
      projects,
    };
  }

  @Get('/login-header')
  @UseGuards(AuthGuard('jwt'))
  async loginHeader(@Req() req): Promise<LoginHeader> {
    const user = req.user as User;
    const projects = await this.last3Projects(user.id);
    const tasks = await this.taskService.paginate({
      options: {
        page: 1,
        limit: 5,
      },
      userId: user.id,
      state: State.ASSIGNED,
    });
    return {
      projects,
      tasks: tasks.items,
    };
  }

  private async last3Projects(userId): Promise<Project[]> {
    const projects = await this.projectService.paginate({
      options: {
        limit: 3,
        page: 1,
      },
      userId,
    });
    return projects.items;
  }
}
