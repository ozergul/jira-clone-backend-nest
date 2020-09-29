import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lov } from './lov.entity';
import { LovType } from './enum';

@Injectable()
export class LovService {
  constructor(
    @InjectRepository(Lov)
    private lovRepository: Repository<Lov>,
  ) {}

  async findAllByType(lovType: LovType): Promise<Lov[]> {
    return this.lovRepository.find({
      where: { type: lovType },
      order: {
        value: 'DESC',
      },
    });
  }

  async findById(id: number): Promise<Lov> {
    return this.lovRepository.findOne({ id });
  }
}
