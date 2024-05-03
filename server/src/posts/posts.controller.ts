import {
  Body,
  Controller,
  Post,
  Res,
  Param,
  Get,
  Req,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from '@prisma/client';
import { Request, Response, request } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.postsService.getAllPosts();
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 500,
        message: 'Internal Server Error!',
      });
    }
  }

  @Get(':id')
  async getUserPosts(@Param('id') id: string): Promise<any> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }

      const userPosts = await this.postsService.getPostsByUserId(userId);
      return {
        status: 'Ok!',
        message: 'Successfully fetched user posts!',
        result: userPosts,
      };
    } catch (error) {
      return {
        status: 'Error!',
        message: error.message || 'Controller error',
      };
    }
  }

  @Post(':id')
  async createPost(
    @Body() createPostDto: CreatePostDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Posts | { status: number; message: string }> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }

      const createdPost = await this.postsService.createPost(
        createPostDto,
        userId,
      );
      return response.status(201).json({
        status: 'Ok!',
        message: 'Post created successfully!',
        result: createdPost,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
  @Delete(':id')
  async deletePost(@Param('id') id: string, @Res() response): Promise<any> {
    try {
      const postId = parseInt(id, 10);
      if (isNaN(postId)) {
        throw new Error('Invalid post ID');
      }

      await this.postsService.deletePost(postId);
      return response.status(200).json({
        status: 'Ok!',
        message: 'Post deleted successfully!',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
