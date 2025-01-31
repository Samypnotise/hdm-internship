import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import PostRepository from '../Repository/PostRepository';
import PostDto from '../Dto/PostDto';
import Post from '../Entity/Post';
import UserRepository from '../Repository/UserRepository';
import User from '../Entity/User';

// NOTE: All the try catch logic should go into use cases
// The resolver should only invoke the proper use case

@Resolver(Post)
export default class PostResolver {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly userRepository: UserRepository,
  ) {}

  // NOTE: Allows to return the author field, which is a User
  // The method name must be the same as the field in the entity
  @ResolveField(() => User)
  async author(post: Post) {
    try {
      return await this.userRepository.findById(post.authorId);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Query(() => Post)
  findPostById(@Args('id') id: string) {
    try {
      return this.postRepository.findById(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Query(() => [Post])
  findPostByAuthor(@Args('authorId') authorId: string) {
    try {
      return this.postRepository.findByAuthor(authorId);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Mutation(() => Post)
  createPost(@Args('dto') dto: PostDto) {
    try {
      return this.postRepository.create(dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Mutation(() => Post)
  deletePost(@Args('id') id: string) {
    try {
      return this.postRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
