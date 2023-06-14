import { IReviewDto } from "./review.interface";

interface UserReviewResponse {
    ResturantReviews: IReviewDto[];
    ProductReviews: IReviewDto[];
}

export type { UserReviewResponse }
