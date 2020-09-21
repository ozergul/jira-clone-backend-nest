import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LovService } from './lov.service';
import { Lov } from './lov.entity';
import { SharedModule } from '../../shared';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Lov])],
  providers: [LovService],
})
export class LovModule {}
