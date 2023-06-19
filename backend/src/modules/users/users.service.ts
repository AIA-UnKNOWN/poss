import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { User } from './entity/user.entity';
import { CreateUserDto, UserWithoutPass } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserWithoutPass[]> {
    const users = await this.usersRepository.find();
    return users.map(({ password, ...userData }) => userData);
  }

  async findOne(id: number): Promise<UserWithoutPass | null> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException("User doesn't exist");
    const { password, ...userData } = user;
    return userData;
  }

  findOneByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(userData: CreateUserDto): Promise<UserWithoutPass> {
    let user = new User();
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    user.email = userData.email;
    user.username = userData.username;
    user.password = hashedPassword;
    const savedUser = await this.usersRepository.save(user);
    return this.findOne(savedUser.id);
  }
  
}