import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Core/Datasource/Prisma';
import Bcrypt from 'src/Core/Security/Service/Encryption/Bcrypt';
import UserDto from '../Dto/UserDto';

@Injectable()
export default class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: Bcrypt,
  ) {}

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findById(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async resetPassword(id: string, password: string) {
    return this.prisma.user.update({
      where: { id },
      data: {
        password: await this.bcrypt.hash(password),
      },
    });
  }

  async create(dto: UserDto) {
    const hashedPassword = await this.bcrypt.hash(dto.password);

    dto.password = hashedPassword;
    dto.email = dto.email.trim().toLowerCase();

    const createdUser = await this.prisma.user.create({ data: dto });

    return createdUser;
  }

  async update(dto: UserDto) {
    return await this.prisma.user.update({
      where: { id: dto.id },
      data: dto,
    });
  }
}
