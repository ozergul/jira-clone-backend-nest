import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly code: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  readonly description: string;
}
