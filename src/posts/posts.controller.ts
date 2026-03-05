import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('/{:id}')
  getPosts(@Param('userId') userId: number) {
    return this.postService.findAll(userId);
  }
}
