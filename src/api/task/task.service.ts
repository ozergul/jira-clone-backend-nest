import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async paginate(options: IPaginationOptions): Promise<Pagination<Task>> {
    return paginate<Task>(this.taskRepository, options);
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const entity = Object.assign(new Task(), createTaskDto);
    return this.taskRepository.save(entity);
  }
}
