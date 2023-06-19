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

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  signUp(@Body() userData: CreateUserDto) {
    return this.authService.signUp(userData);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() userData: SignInDto) {
    return this.authService.signIn(userData);
  }

}
