export type SignInData = {
  username: string;
  password: string;
}

export type SignUpData = SignInData & {
  email: string;
  confirmPassword: string;
}
