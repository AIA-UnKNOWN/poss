import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { AuthGuard } from 'src/modules/auth/auth.guard';

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
  async findOne(@Param('userId') userId: number) {
    return this.usersService.findOne(userId);
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

}
