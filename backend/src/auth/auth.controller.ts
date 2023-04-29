import {
  Controller,
  Post,
  Body,
  HttpStatus,
  UnauthorizedException,
  HttpCode,
} from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { SignInBody, SignUpBody } from './interfaces/auth.interface';

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

  @Post('signin')
  @HttpCode(200)
  async signIn(@Body() userData: SignInBody) {
    const user = await this.userService.findOneByUsername(userData.username);
    const hashedPassword = user.password;
    const isPasswordMatch = await bcrypt.compare(userData.password, hashedPassword);
    if (!isPasswordMatch) throw new UnauthorizedException();
    return { ...user, password: undefined };
  }

}
