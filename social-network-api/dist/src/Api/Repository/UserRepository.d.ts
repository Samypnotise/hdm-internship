import { PrismaService } from 'src/Core/Datasource/Prisma';
import Bcrypt from 'src/Core/Security/Service/Encryption/Bcrypt';
import UserDto from '../Dto/UserDto';
export default class UserRepository {
    private readonly prisma;
    private readonly bcrypt;
    constructor(prisma: PrismaService, bcrypt: Bcrypt);
    findAll(): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findById(id: string): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    resetPassword(id: string, password: string): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(dto: UserDto): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(dto: UserDto): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
