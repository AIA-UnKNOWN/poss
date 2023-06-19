import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './auth.dto';
import { CreateUserDto } from '../users/user.dto';
import { ValidationPipe } from './auth.pipes';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  signUp(@Body(new ValidationPipe()) userData: CreateUserDto) {
    return this.authService.signUp(userData);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body(new ValidationPipe()) userData: SignInDto) {
    return this.authService.signIn(userData);
  }

}
