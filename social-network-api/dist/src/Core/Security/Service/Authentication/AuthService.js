"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const InvalidUserPassword_1 = require("./Exceptions/InvalidUserPassword");
const UserRepository_1 = require("../../../../Api/Repository/UserRepository");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(userRepository, jwtService, configService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async authenticate(email, password) {
        if (email === '' || password === '') {
            throw new common_1.BadRequestException();
        }
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error(`User not found with email "${email}"`);
        }
        if (!(await bcrypt.compare(password, user.password))) {
            throw new InvalidUserPassword_1.default();
        }
        return { ...user };
    }
    async createToken(user) {
        if (!user) {
            throw new Error('User not found.');
        }
        return await this.jwtService.signAsync({
            userId: user.id,
            email: this.formatEmail(user.email),
        }, {
            secret: this.configService.get('JWT_SECRET'),
        });
    }
    async validate(token) {
        return await this.jwtService.verify(token);
    }
    formatEmail(field) {
        return field.trim().toLowerCase();
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [UserRepository_1.default,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=AuthService.js.map