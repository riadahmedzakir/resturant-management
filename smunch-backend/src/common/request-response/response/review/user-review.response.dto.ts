import { Review } from '../../../domain.dtos/review.entity';

class UserReviewResponse {
  ResturantReviews: Review[];
  ProductReviews: Review[];
}

export { UserReviewResponse };
