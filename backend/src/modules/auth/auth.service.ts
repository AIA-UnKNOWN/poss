import {
  Injectable,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';
import { SignInDto, SignInReturnValueDto } from './auth.dto';
import { CreateUserDto, UserWithoutPass } from 'src/modules/users/user.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  signUp(userData: CreateUserDto): Promise<UserWithoutPass> {
    return this.userService.create(userData);
  }

  async signIn(userData: SignInDto): Promise<SignInReturnValueDto> {
    const user = await this.userService.findOneByUsername(userData.username);
    if (!user) throw new UnauthorizedException();
    const hashedPassword = user.password;
    const isPasswordMatch = await bcrypt.compare(userData.password, hashedPassword);
    if (!isPasswordMatch) throw new UnauthorizedException();
    const { id, username } = user;
    const payload = { username, sub: id };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }

}
