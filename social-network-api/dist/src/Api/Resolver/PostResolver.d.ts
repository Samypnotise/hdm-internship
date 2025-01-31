import PostRepository from '../Repository/PostRepository';
import PostDto from '../Dto/PostDto';
import Post from '../Entity/Post';
import UserRepository from '../Repository/UserRepository';
export default class PostResolver {
    private readonly postRepository;
    private readonly userRepository;
    constructor(postRepository: PostRepository, userRepository: UserRepository);
    author(post: Post): Promise<{
        id: string;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findPostById(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
    } | null>;
    findPostByAuthor(authorId: string): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
    }[]>;
    createPost(dto: PostDto): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
    }>;
    deletePost(id: string): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
    }>;
}
