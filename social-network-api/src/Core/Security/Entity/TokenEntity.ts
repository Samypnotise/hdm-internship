import { Field, ObjectType } from '@nestjs/graphql';
import User from 'src/Api/Entity/User';

@ObjectType()
export default class TokenEntity {
  @Field(() => String)
  token: string;

  @Field(() => User)
  user: User;
}
