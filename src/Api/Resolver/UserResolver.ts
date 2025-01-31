import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import User from '../Entity/User';
import UserRepository from '../Repository/UserRepository';
import { BadRequestException } from '@nestjs/common';
import UserDto from '../Dto/UserDto';

// NOTE: All the try catch logic should go into use cases
// The resolver should only invoke the proper use case

@Resolver(User)
export default class UserResolver {
  constructor(private readonly userRepository: UserRepository) {}

  @Query(() => [User])
  getAllUsers() {
    return this.userRepository.findAll();
  }

  @Query(() => User)
  getUserById(@Args('id') id: string) {
    try {
      return this.userRepository.findById(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Query(() => User)
  getUserByEmail(@Args('email') email: string) {
    try {
      return this.userRepository.findByEmail(email);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Mutation(() => User)
  resetPassword(@Args('id') id: string, @Args('password') password: string) {
    try {
      return this.userRepository.resetPassword(id, password);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Mutation(() => User)
  createUser(@Args('dto') dto: UserDto) {
    try {
      return this.userRepository.create(dto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Mutation(() => User)
  updateUser(@Args('dto') dto: UserDto) {
    try {
      return this.userRepository.update(dto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
