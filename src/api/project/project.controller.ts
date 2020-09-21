import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CreateProjectDto } from './dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './project.entity';
import { ProjectService } from './project.service';

@ApiTags('projects')
@Controller('/projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async paginate(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<Project>> {
    return await this.projectService.paginate({
      page,
      limit,
    });
  }

  @Get('/:code')
  async getByCode(@Param() params): Promise<Project> {
    return await this.projectService.findByCode(params.code);
  }

  @Post('/create')
  async create(
    @Res() res: Response,
    @Body() createProjectDto: CreateProjectDto,
  ) {
    const code = createProjectDto.code;
    const isExist = await this.projectService.findByCode(code);

    if (isExist) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Code you provided is existing.',
      });
    }

    const project = await this.projectService.create(createProjectDto);

    if (project) {
      res.status(HttpStatus.OK).send();
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Put('/update')
  async update(
    @Res() res: Response,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    const updated = await this.projectService.update(updateProjectDto);

    if (updated) {
      res.status(HttpStatus.OK).send();
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Post('/complete')
  async completeProject(@Res() res: Response, @Body() { id }: { id: number }) {
    const completed = await this.projectService.complete(id);
    if (completed) {
      const updatedLastEntity = await this.projectService.findById(id);

      res.status(HttpStatus.OK).send(updatedLastEntity);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param() params) {
    const deleted = await this.projectService.delete(params.id);
    if (deleted) {
      res.status(HttpStatus.OK).send(deleted);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
