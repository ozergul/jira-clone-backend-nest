import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../user/user.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post('/login')
  async login(@Req() req) {
    return this.authService.login(req.body);
  }

  @Post('/register')
  async register(@Res() res, @Body() registerUserDto: RegisterUserDto) {
    const isRegistered = await this.userService.findOneByEmail(registerUserDto.email);
    if (isRegistered) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Email you provided is existing.',
      });
      return;
    }

    const user = await this.userService.create(registerUserDto);
    if (user) {
      const { password, ...result } = user;

      res.status(HttpStatus.OK).send(result);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  getProfile(@Req() req) {
    const { password, ...user } = req.user;
    return user;
  }
}
