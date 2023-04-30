import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { SignInDto, SignUpDto } from './auth.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('signup')
  signUp(@Body() userData: SignUpDto) {
    return this.authService.signUp(userData);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() userData: SignInDto) {
    return this.authService.signIn(userData);
  }

}
