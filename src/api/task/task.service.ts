import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto';
import { State } from './models';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async paginate({
    options,
    userId,
    state,
  }: {
    options: IPaginationOptions;
    userId: number;
    state: State;
  }): Promise<Pagination<Task>> {
    const queryBuilder = this.taskRepository.createQueryBuilder('task');
    if (state === State.ASSIGNED) {
      queryBuilder.where('task.assigneeId = :assigneeId', { assigneeId: userId });
    } else if (state === State.REPORTED) {
      queryBuilder.where('task.reporterId = :reporterId', { reporterId: userId });
    }

    queryBuilder.leftJoinAndSelect('task.type', 'type');
    queryBuilder.leftJoinAndSelect('task.priority', 'priority');

    return await paginate<Task>(queryBuilder, options);
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const entity = Object.assign(new Task(), createTaskDto);
    return this.taskRepository.save(entity);
  }

  async save(entity: Partial<Task>): Promise<Task> {
    return this.taskRepository.save(entity);
  }
}
