"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const DatasourceModule_1 = require("../Datasource/DatasourceModule");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const Bcrypt_1 = require("./Service/Encryption/Bcrypt");
const JwtStrategy_1 = require("./Strategy/JwtStrategy");
const LoccalStrategy_1 = require("./Strategy/LoccalStrategy");
const LocalAuthGuard_1 = require("./Guard/LocalAuthGuard");
const UserRepository_1 = require("../../Api/Repository/UserRepository");
const AuthService_1 = require("./Service/Authentication/AuthService");
const AuthenticationResolver_1 = require("./Resolver/AuthenticationResolver");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            DatasourceModule_1.default,
            config_1.ConfigModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const secret = configService.get('JWT_SECRET');
                    return {
                        secret,
                        signOptions: { expiresIn: '1h' },
                    };
                },
            }),
        ],
        exports: [Bcrypt_1.default, AuthService_1.AuthService],
        providers: [
            AuthService_1.AuthService,
            AuthenticationResolver_1.default,
            Bcrypt_1.default,
            JwtStrategy_1.default,
            LoccalStrategy_1.LocalStrategy,
            LocalAuthGuard_1.default,
            UserRepository_1.default,
        ],
    })
], SecurityModule);
exports.default = SecurityModule;
//# sourceMappingURL=SecurityModule.js.map