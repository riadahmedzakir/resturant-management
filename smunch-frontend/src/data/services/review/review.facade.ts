import { getProductReviewList, getResturantReviewList } from "./review.api";

export class ReviewFacade {
    static getResturantReviewListApi = (resturantId: string) => getResturantReviewList(resturantId);

    static getProductReviewListApi = (resturantId: string) => getProductReviewList(resturantId);
}