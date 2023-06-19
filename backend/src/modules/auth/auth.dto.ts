export class ErrorMessage {
  email: string;
  username: string;
  password: string;
}

export class SignInDto {
  username: string;
  password: string;
}

export class SignInReturnValueDto {
  accessToken: string;
}