import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import UserRepository from 'src/Api/Repository/UserRepository';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export default class JwtStrategy extends JwtStrategy_base {
    readonly configService: ConfigService;
    readonly userRepository: UserRepository;
    constructor(configService: ConfigService, userRepository: UserRepository);
    validate(payload: {
        userId: string;
    }): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
