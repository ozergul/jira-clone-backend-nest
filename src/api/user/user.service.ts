import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterUserDto } from '../auth/dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(registerUserDto: RegisterUserDto): Promise<User> {
    const entity = Object.assign(new User(), registerUserDto);
    return this.userRepository.save(entity);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }
}
