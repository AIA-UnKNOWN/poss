import { User } from "src/users/entity/user.entity";

export class ErrorMessage {
  email: string;
  username: string;
  password: string;
}

export class SignUpDto extends User {
  confirmPassword: string;
}

export class SignInDto {
  username: string;
  password: string;
}

export class SignInReturnValueDto {
  accessToken: string;
}