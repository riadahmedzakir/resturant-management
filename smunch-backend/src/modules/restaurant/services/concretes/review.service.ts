import { Injectable } from '@nestjs/common';
import {
  CommonCommandResponse,
  CommonQueryResponse,
} from '../../../../common/request-response/response/common.response';
import { GenericRepositoryService } from '../../../database/services/contracts/repository.service';
import { IReviewService } from '../contracts/review.service.interface';
import { Review } from './../../../../common/domain.dtos/review.model';
import {
  ProductReviewListQuery,
  ResturantReviewListQuery,
  SubmitReviewCommand,
  UserReviewListQuery,
} from 'src/common/request-response/request/review/review.request';

@Injectable()
export class ReviewService implements IReviewService {
  constructor(
    private readonly _genericRepositoryService: GenericRepositoryService,
  ) {}
  getAllReviewByResturantId: (
    query: ResturantReviewListQuery,
  ) => Promise<CommonQueryResponse<Review[]>>;

  getAllReviewByProductId: (
    query: ProductReviewListQuery,
  ) => Promise<CommonQueryResponse<Review[]>>;

  getAllReviewByUserId: (
    query: UserReviewListQuery,
  ) => Promise<CommonQueryResponse<Review[]>>;

  submitResturantReview: (
    query: SubmitReviewCommand,
  ) => Promise<CommonCommandResponse<Review>>;

  submitProductReview: (
    query: SubmitReviewCommand,
  ) => Promise<CommonQueryResponse<Review>>;
}
