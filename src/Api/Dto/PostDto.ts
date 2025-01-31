import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class PostDto {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  authorId: string;
}
