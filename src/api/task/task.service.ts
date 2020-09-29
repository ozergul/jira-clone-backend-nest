import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { State } from './models';
import { LovService } from '../lov/lov.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private lovService: LovService,
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

  async getByTaskId(taskId: string): Promise<Task> {
    return this.taskRepository.findOne({ taskId }, { relations: ['type', 'priority'] });
  }

  async save(entity: Partial<Task>): Promise<Task> {
    return this.taskRepository.save(entity);
  }

  async update(updateTaskDto: UpdateTaskDto) {
    const priority = await this.lovService.findById(updateTaskDto.priorityId);
    const type = await this.lovService.findById(updateTaskDto.typeId);

    const entity: Partial<Task> = {
      id: updateTaskDto.id,
      taskId: updateTaskDto.taskId,
      title: updateTaskDto.title,
      description: updateTaskDto.description,
      priority,
      type,
    };
    return this.taskRepository.update(updateTaskDto.id, entity);
  }
}
