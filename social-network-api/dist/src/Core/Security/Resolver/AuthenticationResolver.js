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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const TokenEntity_1 = require("../Entity/TokenEntity");
const AuthenticationDto_1 = require("../Dto/AuthenticationDto");
const common_1 = require("@nestjs/common");
const AuthService_1 = require("../Service/Authentication/AuthService");
let AuthenticationResolver = class AuthenticationResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async login(dto) {
        try {
            const user = await this.authService.authenticate(dto.email, dto.password);
            const token = await this.authService.createToken(user);
            return { token, user };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
__decorate([
    (0, graphql_1.Query)(() => TokenEntity_1.default),
    __param(0, (0, graphql_1.Args)('dto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthenticationDto_1.default]),
    __metadata("design:returntype", Promise)
], AuthenticationResolver.prototype, "login", null);
AuthenticationResolver = __decorate([
    (0, graphql_1.Resolver)(() => TokenEntity_1.default),
    __metadata("design:paramtypes", [AuthService_1.AuthService])
], AuthenticationResolver);
exports.default = AuthenticationResolver;
//# sourceMappingURL=AuthenticationResolver.js.map