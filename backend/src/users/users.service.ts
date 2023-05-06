import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { User } from './entity/user.entity';
import { UserWithoutPass } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<UserWithoutPass[]> {
    const users = await this.usersRepository.find();
    return users.map(({ password, ...userData }) => userData);
  }

  async findOne(id: number): Promise<UserWithoutPass | null> {
    const { password, ...userData } = await this.usersRepository.findOneBy({ id });
    return userData;
  }

  findOneByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(userData: User): Promise<UserWithoutPass> {
    let user = new User();
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    user = { ...userData, password: hashedPassword };
    const savedUser = await this.usersRepository.save(user);
    return this.findOne(savedUser.id);
  }
  
}