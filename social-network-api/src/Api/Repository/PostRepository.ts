import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Core/Datasource/Prisma';
import PostDto from '../Dto/PostDto';

@Injectable()
export default class PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.post.findUnique({
      where: { id },
    });
  }

  async findByAuthor(authorId: string) {
    return await this.prisma.post.findMany({
      where: { authorId },
    });
  }

  async create(dto: PostDto) {
    return await this.prisma.post.create({ data: dto });
  }

  async delete(id: string) {
    return await this.prisma.post.delete({ where: { id } });
  }
}
