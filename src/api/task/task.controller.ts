import { Body, Controller, Get, HttpStatus, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { Response } from 'express';
import { CreateTaskDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user/user.entity';
import { State } from './models';

@ApiTags('tasks')
@Controller('/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

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
  async create(@Res() res: Response, @Body() createTaskDto: CreateTaskDto) {
    const task = await this.taskService.create(createTaskDto);

    if (task) {
      res.status(HttpStatus.OK).send(task);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
