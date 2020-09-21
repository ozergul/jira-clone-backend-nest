import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateUserDto } from './dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('/users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Post('/create')
  async create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);

    if (user) {
      const { password, ...result } = user;

      res.status(HttpStatus.OK).send(result);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  // TODO ROLE
  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: number) {
    const deleted = await this.usersService.deleteById(id);

    if (deleted.affected) {
      res.status(HttpStatus.OK).send();
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
