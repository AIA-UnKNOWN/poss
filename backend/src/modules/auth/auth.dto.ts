import { IsNotEmpty, IsString } from "class-validator";

export class ErrorMessage {
  email: string;
  username: string;
  password: string;
}

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class SignInReturnValueDto {
  accessToken: string;
}