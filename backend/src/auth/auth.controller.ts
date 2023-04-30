import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  HttpCode,
} from '@nestjs/common';
import * as bcrypt from "bcrypt";
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
  @HttpCode(200)
  async signIn(@Body() userData: SignInDto) {
    const user = await this.userService.findOneByUsername(userData.username);
    const hashedPassword = user.password;
    const isPasswordMatch = await bcrypt.compare(userData.password, hashedPassword);
    if (!isPasswordMatch) throw new UnauthorizedException();
    return { ...user, password: undefined };
  }

}
