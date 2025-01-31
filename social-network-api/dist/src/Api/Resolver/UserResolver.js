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
const User_1 = require("../Entity/User");
const UserRepository_1 = require("../Repository/UserRepository");
const common_1 = require("@nestjs/common");
const UserDto_1 = require("../Dto/UserDto");
let UserResolver = class UserResolver {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAllUsers() {
        return this.userRepository.findAll();
    }
    getUserById(id) {
        try {
            return this.userRepository.findById(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    getUserByEmail(email) {
        try {
            return this.userRepository.findByEmail(email);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    resetPassword(id, password) {
        try {
            return this.userRepository.resetPassword(id, password);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    createUser(dto) {
        try {
            return this.userRepository.create(dto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    updateUser(dto) {
        try {
            return this.userRepository.update(dto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
__decorate([
    (0, graphql_1.Query)(() => [User_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    (0, graphql_1.Query)(() => User_1.default),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUserById", null);
__decorate([
    (0, graphql_1.Query)(() => User_1.default),
    __param(0, (0, graphql_1.Args)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUserByEmail", null);
__decorate([
    (0, graphql_1.Mutation)(() => User_1.default),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "resetPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => User_1.default),
    __param(0, (0, graphql_1.Args)('dto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto_1.default]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => User_1.default),
    __param(0, (0, graphql_1.Args)('dto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto_1.default]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateUser", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(User_1.default),
    __metadata("design:paramtypes", [UserRepository_1.default])
], UserResolver);
exports.default = UserResolver;
//# sourceMappingURL=UserResolver.js.map