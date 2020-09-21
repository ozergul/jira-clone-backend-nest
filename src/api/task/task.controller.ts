import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { Response } from 'express';
import { CreateTaskDto } from './dto';

@ApiTags('tasks')
@Controller('/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async paginate(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<Task>> {
    return await this.taskService.paginate({
      page,
      limit,
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
