import { Controller, Get, Post, Param, Body, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: number, @Res() response: Response) {
    const user = await this.usersService.findOne(userId);
    if (!user) {
      response.status(HttpStatus.NOT_FOUND).send({
        statusCode: HttpStatus.NOT_FOUND,
        message: "User doesn't exist",
      });
      return;
    }
    return user;
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

}
