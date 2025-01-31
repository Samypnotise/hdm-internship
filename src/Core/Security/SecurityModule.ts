import { Module } from '@nestjs/common';
import DatasourceModule from '../Datasource/DatasourceModule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import Bcrypt from './Service/Encryption/Bcrypt';
import JwtStrategy from './Strategy/JwtStrategy';
import { LocalStrategy } from './Strategy/LoccalStrategy';
import LocalAuthGuard from './Guard/LocalAuthGuard';
import UserRepository from 'src/Api/Repository/UserRepository';
import { AuthService } from './Service/Authentication/AuthService';
import AuthenticationResolver from './Resolver/AuthenticationResolver';

@Module({
  imports: [
    DatasourceModule,
    ConfigModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        return {
          secret,
          signOptions: { expiresIn: '1h' },
        };
      },
    }),
  ],
  exports: [Bcrypt, AuthService],
  providers: [
    AuthService,
    AuthenticationResolver,
    Bcrypt,
    JwtStrategy,
    LocalStrategy,
    LocalAuthGuard,
    UserRepository,
  ],
})
export default class SecurityModule {}
