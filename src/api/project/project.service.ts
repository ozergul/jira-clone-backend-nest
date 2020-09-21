import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Repository, UpdateResult } from 'typeorm';
import { CreateProjectDto } from './dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './project.entity';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const entity = Object.assign(new Project(), createProjectDto);
    return this.projectRepository.save(entity);
  }

  async findByCode(code: string): Promise<Project> {
    return this.projectRepository.findOne({ code });
  }

  async findById(id: number): Promise<Project> {
    return this.projectRepository.findOne({ id });
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Project>> {
    const queryBuilder = this.projectRepository.createQueryBuilder('project');
    queryBuilder.orderBy('project.updatedAt', 'DESC');
    return paginate<Project>(queryBuilder, options);
  }

  async update(updateProjectDto: UpdateProjectDto): Promise<Project> {
    return this.projectRepository.save(updateProjectDto);
  }

  async complete(id: number): Promise<UpdateResult> {
    return this.projectRepository.update(id, { isCompleted: true });
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.projectRepository.delete(id);
  }

  async getAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }
}
