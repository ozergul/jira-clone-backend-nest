import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async validateUser(payload: any): Promise<any> {
    const user = await this.usersService.findOneByEmail(payload.email);
    const exception = new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    if (!user) {
      throw exception;
    } else {
      const passwordMatched = await bcrypt.compare(payload.password, user.password);

      if (!passwordMatched) {
        throw exception;
      }
    }
    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, password: user.password, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
