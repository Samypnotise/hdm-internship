import UserRepository from '../Repository/UserRepository';
import UserDto from '../Dto/UserDto';
export default class UserResolver {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getAllUsers(): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getUserById(id: string): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    getUserByEmail(email: string): Promise<{
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
    createUser(dto: UserDto): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(dto: UserDto): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
