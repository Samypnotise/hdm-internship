import { Args, Query, Resolver } from '@nestjs/graphql';
import TokenEntity from '../Entity/TokenEntity';
import AuthenticationDto from '../Dto/AuthenticationDto';
import { BadRequestException } from '@nestjs/common';
import { AuthService } from '../Service/Authentication/AuthService';
import TokenValidationDto from '../Dto/TokenValidationDto';

@Resolver(() => TokenEntity)
export default class AuthenticationResolver {
  constructor(private authService: AuthService) {}

  @Query(() => TokenEntity)
  async login(@Args('dto') dto: AuthenticationDto): Promise<TokenEntity> {
    try {
      const user = await this.authService.authenticate(dto.email, dto.password);

      const token = await this.authService.createToken(user);

      return { token, user };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Query(() => Boolean)
  async validateToken(@Args('dto') dto: TokenValidationDto) {
    try {
      await this.authService.validate(dto.token);

      return true;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
