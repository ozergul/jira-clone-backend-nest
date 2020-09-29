import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { Response } from 'express';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user/user.entity';
import { State } from './models';
import { LovService } from '../lov/lov.service';
import { ProjectService } from '../project/project.service';

@ApiTags('tasks')
@Controller('/tasks')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly lovService: LovService,
    private readonly projectService: ProjectService,
  ) {}

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  async paginate(
    @Req() req,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('state') state: State,
  ): Promise<Pagination<Task>> {
    const user = req.user as User;
    return await this.taskService.paginate({
      options: {
        page,
        limit,
      },
      userId: user.id,
      state,
    });
  }

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  async create(@Req() req, @Res() res: Response, @Body() createTaskDto: CreateTaskDto) {
    const user = req.user as User;
    const task = await this.taskService.create(createTaskDto);

    if (task) {
      if (!task.assigneeId) {
        task.assigneeId = user.id;
      }

      const type = await this.lovService.findById(createTaskDto.typeId);
      task.type = type;

      const priority = await this.lovService.findById(createTaskDto.priorityId);
      task.priority = priority;

      const project = await this.projectService.findById(createTaskDto.projectId);
      const taskId = `${project.code.toLocaleUpperCase()}-${task.id}`;

      task.taskId = taskId;

      const savedTask = await this.taskService.save(task);
      res.status(HttpStatus.OK).send(savedTask);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Get('/:taskId')
  async getByTaskId(@Param() params): Promise<Task> {
    return await this.taskService.getByTaskId(params.taskId);
  }

  @Put('/update')
  @UseGuards(AuthGuard('jwt'))
  async update(@Res() res: Response, @Body() updateTaskDto: UpdateTaskDto) {
    const updated = await this.taskService.update(updateTaskDto);

    if (updated) {
      res.status(HttpStatus.OK).send();
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
