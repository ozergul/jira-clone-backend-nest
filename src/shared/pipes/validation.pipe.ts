import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ValidationError } from 'class-validator/types/validation/ValidationError';
import { ValidationMessageList } from '../models';

@Injectable()
export class CustomValidationPipe implements PipeTransform<any> {
  async transform(value, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('No data submitted');
    }

    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(this.buildError(errors));
    }
    return value;
  }

  private buildError(errors: ValidationError[]): ValidationMessageList[] {
    return errors
      .map((error) =>
        Object.entries(error.constraints).map((item) => ({
          property: error.property,
          error: item[0],
          message: item[1],
        })),
      )
      .reduce((acc, item) => [...acc, ...item], []);
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }
}
