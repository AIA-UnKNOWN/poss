import {
  Injectable,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ErrorMessage, SignUpDto } from './auth.dto';
import { User } from 'src/users/entity/user.entity';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService,
  ) {}
  
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

  signUp(userData: SignUpDto): Promise<User> {
    const [isValidated, errorMessage] = this.validate(userData);
    if (!isValidated) throw new UnauthorizedException({
      statusCode: HttpStatus.UNAUTHORIZED,
      message: 'Unauthorized',
      error: errorMessage,
    });
    return this.userService.create(userData);
  }

}
