import { Injectable } from '@nestjs/common';
import { ErrorMessage, SignUpDto } from './auth.dto';

@Injectable()
export class AuthService {
  
  validate(userData: SignUpDto): [boolean, ErrorMessage] {
    let errorMessage: ErrorMessage = {
      email: '',
      username: '',
      password: '',
    }
    const { email, username, password, confirmPassword } = userData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const isValidEmail = emailRegex.test(email);

    if (!email) errorMessage.email = 'Email field is required'
      else errorMessage.email = '';
    if (!isValidEmail) errorMessage.email = 'Email field is not a valid email';
      else errorMessage.email = '';
    if (!username) errorMessage.username = 'Username field is required';
      else errorMessage.username = '';
    if (!password) errorMessage.password = 'Password field is required';
      else errorMessage.password = '';
    if (password.length < 10) errorMessage.password = 'Password length too short';
      else errorMessage.password = '';
    if (password !== confirmPassword) errorMessage.password = "Password doesn't match";
      else errorMessage.password = '';

    return errorMessage.email || errorMessage.username || errorMessage.password
      ? [false, errorMessage]
      : [true, null];
  }

}
