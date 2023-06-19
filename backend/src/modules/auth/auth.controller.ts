import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { SignInDto } from './auth.dto';
import { CreateUserDto } from '../users/user.dto';
import { AuthGuard } from './auth.guard';
import { UsersService } from 'src/modules/users/users.service';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
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

  @UseGuards(AuthGuard)
  @Get('user')
  getCurrentUser(@Req() request: Request) {
    const userId = request['user'].sub;
    return this.userService.findOne(userId);
  }

}
