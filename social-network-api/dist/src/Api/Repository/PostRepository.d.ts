import { PrismaService } from 'src/Core/Datasource/Prisma';
import PostDto from '../Dto/PostDto';
export default class PostRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
    } | null>;
    findByAuthor(authorId: string): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
    }[]>;
    create(dto: PostDto): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
    }>;
}
