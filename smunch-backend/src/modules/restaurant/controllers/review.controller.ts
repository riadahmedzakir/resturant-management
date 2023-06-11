import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  CommonCommandResponse,
  CommonQueryResponse,
} from '../../../common/request-response/response/common/common.response';
import { ReviewService } from '../services/concretes/review.service';
import { Review } from './../../../common/domain.dtos/review.model';
import {
  ProductReviewListQuery,
  ResturantReviewListQuery,
  SubmitReviewCommand,
  UserReviewListQuery,
} from './../../../common/request-response/request/review/review.request';
import { UserReviewResponse } from './../../../common/request-response/response/review/user-review.response';

@Controller('Review')
export class ReviewController {
  constructor(private readonly _reviewService: ReviewService) {}

  @Get('list/resturant-review')
  async getResturantReviewByResturantId(
    @Query() query: ResturantReviewListQuery,
  ): Promise<CommonQueryResponse<Review[]>> {
    return await this._reviewService.getAllReviewByResturantId(query);
  }

  @Get('list/product-review')
  async getProductReviewByProductId(
    @Query() query: ProductReviewListQuery,
  ): Promise<CommonQueryResponse<Review[]>> {
    return await this._reviewService.getAllReviewByProductId(query);
  }

  @Get('list/history/user-review')
  async getUserReviewHistoryByUserId(
    @Query() query: UserReviewListQuery,
  ): Promise<CommonQueryResponse<UserReviewResponse>> {
    return await this._reviewService.getAllReviewByUserId(query);
  }

  @Post('ReviewResturant')
  async reviewResturant(
    @Body() command: SubmitReviewCommand,
  ): Promise<CommonCommandResponse<Review>> {
    return await this._reviewService.submitResturantReview(command);
  }

  @Post('ReviewProduct')
  async reviewProduct(
    @Body() command: SubmitReviewCommand,
  ): Promise<CommonCommandResponse<Review>> {
    return await this._reviewService.submitProductReview(command);
  }
}
