import { SubmitReview } from "../../models/api-request/submit-review.request";
import { getProductReviewList, getResturantReviewList, getUserReviewHistory, reviewProduct, reviewResturant } from "./review.api";

export class ReviewFacade {
    static getResturantReviewListApi = (resturantId: string) => getResturantReviewList(resturantId);

    static getProductReviewListApi = (resturantId: string) => getProductReviewList(resturantId);

    static getUserReviewHistoryApi = (resturantId: string) => getUserReviewHistory(resturantId);

    static reviewResturantApi = (data: SubmitReview) => reviewResturant(data);

    static reviewProductApi = (data: SubmitReview) => reviewProduct(data);
}