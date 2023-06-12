import { HttpStatus, Injectable } from '@nestjs/common';
import {
  CommonCommandResponse,
  CommonQueryResponse,
} from '../../../../common/request-response/response/common/common.response';
import { GenericRepositoryService } from '../../../database/services/contracts/repository.service';
import { IReviewService } from '../contracts/review.service.interface';
import { Review } from '../../../../common/domain.dtos/review.entity';
import {
  ProductReviewListQuery,
  ResturantReviewListQuery,
  SubmitReviewCommand,
  UserReviewListQuery,
} from '../../../../common/request-response/request/review/review.request.dto';
import { UserReviewResponse } from '../../../../common/request-response/response/review/user-review.response.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ReviewService implements IReviewService {
  constructor(
    private readonly _genericRepositoryService: GenericRepositoryService,
  ) {}

  async getAllReviewByResturantId(
    query: ResturantReviewListQuery,
  ): Promise<CommonQueryResponse<Review[]>> {
    const reviews = await this._genericRepositoryService.getMany<Review>(
      'Reviews',
      `{ "ReviewEntityName" : "Resturant", "ReviewEntityId" : "${query.ResturantId}" }`,
      `{ "${query.SortedBy}": ${query.Order} }`,
      query.Skip,
      query.Limit,
    );

    const response = new CommonQueryResponse<Review[]>();
    response.IsScuessful = true;
    response.SuccessResponse = reviews;
    response.StatusCode = HttpStatus.OK;

    return response;
  }

  async getAllReviewByProductId(
    query: ProductReviewListQuery,
  ): Promise<CommonQueryResponse<Review[]>> {
    const reviews = await this._genericRepositoryService.getMany<Review>(
      'Reviews',
      `{ "ReviewEntityName" : "Product", "ReviewEntityId" : "${query.ProductId}" }`,
      `{ "${query.SortedBy}": ${query.Order} }`,
      query.Skip,
      query.Limit,
    );

    const response = new CommonQueryResponse<Review[]>();
    response.IsScuessful = true;
    response.SuccessResponse = reviews;
    response.StatusCode = HttpStatus.OK;

    return response;
  }

  async getAllReviewByUserId(
    query: UserReviewListQuery,
  ): Promise<CommonQueryResponse<UserReviewResponse>> {
    const userProductReviews =
      await this._genericRepositoryService.getMany<Review>(
        'Reviews',
        `{ "ReviewEntityName" : "Product", "UserId" : "${query.UserId}" }`,
        `{ "${query.SortedBy}": ${query.Order} }`,
        query.Skip,
        query.Limit,
      );

    const userResturantReviews =
      await this._genericRepositoryService.getMany<Review>(
        'Reviews',
        `{ "ReviewEntityName" : "Resturant", "UserId" : "${query.UserId}" }`,
        `{ "${query.SortedBy}": ${query.Order} }`,
        query.Skip,
        query.Limit,
      );

    const reviews = new UserReviewResponse();
    reviews.ProductReviews = userProductReviews;
    reviews.ResturantReviews = userResturantReviews;

    const response = new CommonQueryResponse<UserReviewResponse>();
    response.IsScuessful = true;
    response.SuccessResponse = reviews;
    response.StatusCode = HttpStatus.OK;

    return response;
  }

  async submitResturantReview(
    command: SubmitReviewCommand,
  ): Promise<CommonCommandResponse<Review>> {
    const review: Review = {
      _id: uuidv4(),
      UserId: command.UserId,
      ReviewEntityId: command.ReviewEntityId,
      ReviewEntityName: 'Resturant',
      Rating: command.Rating,
      Comment: command.Comment,
    };

    const reviewResponse =
      await this._genericRepositoryService.insertOne<Review>('Reviews', review);

    const response: CommonCommandResponse<Review> = {
      IsScuessful: true,
      SuccessResponse: reviewResponse,
      StatusCode: HttpStatus.OK,
      Erros: [],
    };

    return response;
  }

  async submitProductReview(
    command: SubmitReviewCommand,
  ): Promise<CommonCommandResponse<Review>> {
    const review: Review = {
      _id: uuidv4(),
      UserId: command.UserId,
      ReviewEntityId: command.ReviewEntityId,
      ReviewEntityName: 'Product',
      Rating: command.Rating,
      Comment: command.Comment,
    };

    const reviewResponse =
      await this._genericRepositoryService.insertOne<Review>('Reviews', review);

    const response: CommonCommandResponse<Review> = {
      IsScuessful: true,
      SuccessResponse: reviewResponse,
      StatusCode: HttpStatus.OK,
      Erros: [],
    };

    return response;
  }
}
