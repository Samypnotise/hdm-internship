import { JwtService } from '@nestjs/jwt';
import UserRepository from 'src/Api/Repository/UserRepository';
import User from 'src/Api/Entity/User';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private readonly configService;
    constructor(userRepository: UserRepository, jwtService: JwtService, configService: ConfigService);
    authenticate(email: string, password: string): Promise<User>;
    createToken(user: User): Promise<string>;
    validate(token: string): Promise<any>;
    private formatEmail;
}
