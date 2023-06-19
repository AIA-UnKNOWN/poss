import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpStatus } from '@nestjs/common';
import { ValidationError, validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      const error = this.formatError(errors);
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: "Validation failed",
        error,
      });
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private formatError(errors: ValidationError[]) {
    const error = errors.reduce((err, validationError) => {
      const constraints = Object.keys(validationError.constraints);
      err[validationError.property] = constraints.length > 1
        ? constraints.map(constraint => validationError.constraints[constraint])
        : validationError.constraints[constraints[0]];
      return err;
    }, {});
    return error;
  }
}