import { Review } from './../../../../common/domain.dtos/review.model';

class UserReviewResponse {
  ResturantReviews: Review[];
  ProductReviews: Review[];
}

export { UserReviewResponse };
