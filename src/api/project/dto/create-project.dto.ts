import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly code: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  readonly description: string;
}
