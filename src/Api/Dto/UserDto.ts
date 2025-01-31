import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UserDto {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
