import { IsEmail, IsNotEmpty, Validate, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'passwordMatch', async: false })
export class PasswordMatchConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const createUserDto: CreateUserDto = args.object as CreateUserDto;
    return value === createUserDto.password;
  }
  
  defaultMessage(args: ValidationArguments) {
    return 'Passwords do not match';
  }
}

export type UserWithoutPass = {
  email: string;
  username: string;
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @Validate(PasswordMatchConstraint)
  confirmPassword: string;
}
