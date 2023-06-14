import { getResturantReviewList } from "./review.api";

export class ReviewFacade {
    static getResturantReviewListApi = (resturantId: string) => getResturantReviewList(resturantId);
}