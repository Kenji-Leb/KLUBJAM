import { Body, Controller, Delete, Param, Post, Res } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { Likes } from '@prisma/client';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post(':id')
  async createLike(
    @Body() createLikeDto: CreateLikeDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Likes | { status: number; message: string }> {
    try {
      const postId = parseInt(id, 10);
      if (isNaN(postId)) {
        throw new Error('Invalid post ID');
      }
      const userId = parseInt(String(createLikeDto.userId), 10);

      if (!userId) {
        throw new Error('User ID is required');
      }
      const createdLike = await this.likesService.createLike(
        createLikeDto,
        postId,
        userId,
      );
      return response.status(201).json({
        status: 'Ok!',
        message: 'like created successfully!',
        result: createdLike,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }

  @Delete(':postId/:userId')
  async deleteLike(
    @Param('postId') postId: string,
    @Param('userId') userId: string,
    @Res() response,
  ): Promise<any> {
    try {
      const postIdNum = parseInt(postId, 10);
      const userIdNum = parseInt(userId, 10);

      if (isNaN(postIdNum) || isNaN(userIdNum)) {
        throw new Error('Invalid post ID or user ID');
      }

      await this.likesService.deleteLike(postIdNum, userIdNum);

      return response.status(200).json({
        status: 'Ok!',
        message: 'Like removed successfully!',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
