import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly projectId: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly priorityId: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly typeId: number;

  @ApiProperty()
  readonly assigneeId: number;
}
