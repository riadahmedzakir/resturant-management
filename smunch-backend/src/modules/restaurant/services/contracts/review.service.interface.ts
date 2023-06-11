import { Review } from './../../../../common/domain.dtos/review.model';
import {
  CommonCommandResponse,
  CommonQueryResponse,
} from '../../../../common/request-response/response/common/common.response';
import {
  ProductReviewListQuery,
  ResturantReviewListQuery,
  SubmitReviewCommand,
  UserReviewListQuery,
} from './../../../../common/request-response/request/review/review.request';
import { UserReviewResponse } from './../../../../common/request-response/response/review/user-review.response';

interface IReviewService {
  getAllReviewByResturantId: (
    query: ResturantReviewListQuery,
  ) => Promise<CommonQueryResponse<Review[]>>;

  getAllReviewByProductId: (
    query: ProductReviewListQuery,
  ) => Promise<CommonQueryResponse<Review[]>>;

  getAllReviewByUserId: (
    query: UserReviewListQuery,
  ) => Promise<CommonQueryResponse<UserReviewResponse>>;

  submitResturantReview: (
    query: SubmitReviewCommand,
  ) => Promise<CommonCommandResponse<Review>>;

  submitProductReview: (
    query: SubmitReviewCommand,
  ) => Promise<CommonQueryResponse<Review>>;
}

export type { IReviewService };
