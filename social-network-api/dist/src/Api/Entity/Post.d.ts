import User from './User';
export default class Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
    author: User;
}
