import { User } from "src/users/entity/user.entity";

export interface SignUpBody extends User {
  confirmPassword: string;
}

export interface SignInBody {
  username: string;
  password: string;
}