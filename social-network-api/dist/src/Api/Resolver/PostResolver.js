"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const PostRepository_1 = require("../Repository/PostRepository");
const PostDto_1 = require("../Dto/PostDto");
const Post_1 = require("../Entity/Post");
const UserRepository_1 = require("../Repository/UserRepository");
const User_1 = require("../Entity/User");
let PostResolver = class PostResolver {
    constructor(postRepository, userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }
    async author(post) {
        try {
            return await this.userRepository.findById(post.authorId);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    findPostById(id) {
        try {
            return this.postRepository.findById(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    findPostByAuthor(authorId) {
        try {
            return this.postRepository.findByAuthor(authorId);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    createPost(dto) {
        try {
            return this.postRepository.create(dto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    deletePost(id) {
        try {
            return this.postRepository.delete(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
__decorate([
    (0, graphql_1.ResolveField)(() => User_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.default]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "author", null);
__decorate([
    (0, graphql_1.Query)(() => Post_1.default),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "findPostById", null);
__decorate([
    (0, graphql_1.Query)(() => [Post_1.default]),
    __param(0, (0, graphql_1.Args)('authorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "findPostByAuthor", null);
__decorate([
    (0, graphql_1.Mutation)(() => Post_1.default),
    __param(0, (0, graphql_1.Args)('dto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostDto_1.default]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "createPost", null);
__decorate([
    (0, graphql_1.Mutation)(() => Post_1.default),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "deletePost", null);
PostResolver = __decorate([
    (0, graphql_1.Resolver)(Post_1.default),
    __metadata("design:paramtypes", [PostRepository_1.default,
        UserRepository_1.default])
], PostResolver);
exports.default = PostResolver;
//# sourceMappingURL=PostResolver.js.map