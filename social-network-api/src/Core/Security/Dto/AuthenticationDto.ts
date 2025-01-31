import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class AuthenticationDto {
  @Field()
  email: string;

  @Field()
  password: string;
}
