import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  CommonCommandResponse,
  CommonQueryResponse,
} from '../../../common/request-response/response/common/common.response';
import { ReviewService } from '../services/concretes/review.service';
import { Review } from '../../../common/domain.dtos/review.entity';
import {
  ProductReviewListQuery,
  ResturantReviewListQuery,
  SubmitReviewCommand,
  UserReviewListQuery,
} from '../../../common/request-response/request/review/review.request.dto';
import { UserReviewResponse } from '../../../common/request-response/response/review/user-review.response.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('Review')
@ApiTags('Review')
export class ReviewController {
  constructor(private readonly _reviewService: ReviewService) {}

  @Get('list/resturant-review')
  @ApiOkResponse({
    description: 'Success',
    type: Review,
  })
  async getResturantReviewByResturantId(
    @Query() query: ResturantReviewListQuery,
  ): Promise<CommonQueryResponse<Review[]>> {
    return await this._reviewService.getAllReviewByResturantId(query);
  }

  @Get('list/product-review')
  @ApiOkResponse({
    description: 'Success',
    type: Review,
  })
  async getProductReviewByProductId(
    @Query() query: ProductReviewListQuery,
  ): Promise<CommonQueryResponse<Review[]>> {
    return await this._reviewService.getAllReviewByProductId(query);
  }

  @Get('list/history/user-review')
  @ApiOkResponse({
    description: 'Success',
    type: UserReviewResponse,
  })
  async getUserReviewHistoryByUserId(
    @Query() query: UserReviewListQuery,
  ): Promise<CommonQueryResponse<UserReviewResponse>> {
    return await this._reviewService.getAllReviewByUserId(query);
  }

  @Post('ReviewResturant')
  @ApiOkResponse({
    description: 'Success',
    type: Review,
  })
  async reviewResturant(
    @Body() command: SubmitReviewCommand,
  ): Promise<CommonCommandResponse<Review>> {
    return await this._reviewService.submitResturantReview(command);
  }

  @Post('ReviewProduct')
  @ApiOkResponse({
    description: 'Success',
    type: Review,
  })
  async reviewProduct(
    @Body() command: SubmitReviewCommand,
  ): Promise<CommonCommandResponse<Review>> {
    return await this._reviewService.submitProductReview(command);
  }
}
