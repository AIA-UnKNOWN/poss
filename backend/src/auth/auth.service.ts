import { Injectable } from '@nestjs/common';
import { SignUpBody } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  
  errorMessage = {
    email: '',
    username: '',
    password: '',
  }

  validate(userData: SignUpBody): [boolean, typeof this.errorMessage] {
    const { email, username, password, confirmPassword } = userData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const isValidEmail = emailRegex.test(email);

    if (!email) this.errorMessage.email = 'Email field is required'
      else this.errorMessage.email = '';
    if (!isValidEmail) this.errorMessage.email = 'Email field is not a valid email';
      else this.errorMessage.email = '';
    if (!username) this.errorMessage.username = 'Username field is required';
      else this.errorMessage.username = '';
    if (!password) this.errorMessage.password = 'Password field is required';
      else this.errorMessage.password = '';
    if (password.length < 10) this.errorMessage.password = 'Password length too short';
      else this.errorMessage.password = '';
    if (password !== confirmPassword) this.errorMessage.password = "Password doesn't match";
      else this.errorMessage.password = '';

    return this.errorMessage.email || this.errorMessage.username || this.errorMessage.password
      ? [false, this.errorMessage]
      : [true, null];
  }

}
