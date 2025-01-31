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
const common_1 = require("@nestjs/common");
const Prisma_1 = require("../../Core/Datasource/Prisma");
const Bcrypt_1 = require("../../Core/Security/Service/Encryption/Bcrypt");
let UserRepository = class UserRepository {
    constructor(prisma, bcrypt) {
        this.prisma = prisma;
        this.bcrypt = bcrypt;
    }
    async findAll() {
        return await this.prisma.user.findMany();
    }
    async findById(id) {
        return await this.prisma.user.findUnique({
            where: { id },
        });
    }
    async findByEmail(email) {
        return await this.prisma.user.findUnique({
            where: { email },
        });
    }
    async resetPassword(id, password) {
        return this.prisma.user.update({
            where: { id },
            data: {
                password: await this.bcrypt.hash(password),
            },
        });
    }
    async create(dto) {
        const hashedPassword = await this.bcrypt.hash(dto.password);
        dto.password = hashedPassword;
        dto.email = dto.email.trim().toLowerCase();
        const createdUser = await this.prisma.user.create({ data: dto });
        return createdUser;
    }
    async update(dto) {
        return await this.prisma.user.update({
            where: { id: dto.id },
            data: dto,
        });
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Prisma_1.PrismaService,
        Bcrypt_1.default])
], UserRepository);
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map