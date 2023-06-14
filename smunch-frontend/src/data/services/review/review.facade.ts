import { getProductReviewList, getResturantReviewList, getUserReviewHistory } from "./review.api";

export class ReviewFacade {
    static getResturantReviewListApi = (resturantId: string) => getResturantReviewList(resturantId);

    static getProductReviewListApi = (resturantId: string) => getProductReviewList(resturantId);

    static getUserReviewHistoryApi = (resturantId: string) => getUserReviewHistory(resturantId);
}