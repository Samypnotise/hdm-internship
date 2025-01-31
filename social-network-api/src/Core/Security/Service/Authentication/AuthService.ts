import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import InvalidUserPasswordException from './Exceptions/InvalidUserPassword';
import UserRepository from 'src/Api/Repository/UserRepository';
import User from 'src/Api/Entity/User';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async authenticate(email: string, password: string): Promise<User> {
    if (email === '' || password === '') {
      throw new BadRequestException();
    }

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error(`User not found with email "${email}"`);
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new InvalidUserPasswordException();
    }

    return { ...user };
  }

  async createToken(user: User) {
    if (!user) {
      throw new Error('User not found.');
    }

    return await this.jwtService.signAsync(
      {
        userId: user.id,
        email: this.formatEmail(user.email),
      },
      {
        secret: this.configService.get('JWT_SECRET'),
      },
    );
  }

  async validate(token: string) {
    return await this.jwtService.verify(token);
  }

  private formatEmail(field: string): string {
    return field.trim().toLowerCase();
  }
}
