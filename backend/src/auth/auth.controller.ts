import {
  Controller,
  Post,
  Body,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { SignUpBody } from './interfaces/auth.interface';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('signup')
  signUp(@Body() userData: SignUpBody) {
    const [isValidated, errorMessage] = this.authService.validate(userData);
    if (!isValidated) throw new UnauthorizedException({
      statusCode: HttpStatus.UNAUTHORIZED,
      message: 'Unauthorized',
      error: errorMessage,
    });
    return this.userService.create(userData);
  }

}
