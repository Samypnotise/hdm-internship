import { Field, ObjectType } from '@nestjs/graphql';
import User from './User';

@ObjectType()
export default class Post {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  authorId: string;

  @Field(() => User)
  author: User;
}
