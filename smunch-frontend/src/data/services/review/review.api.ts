import { IReviewDto } from "../../../constants/review.interface";
import { UserReviewResponse } from "../../../constants/user-review.interface";
import { RestMethods } from "../../models/RestMethods";
import { SubmitReview } from "../../models/api-request/submit-review.request";
import { headerContentTypeForJson, jsonPayloadFormatter } from "../../util/util";
import { FetchApi } from "../rest-service/rest.service";

export const getResturantReviewList = (resturantId: string) => FetchApi<IReviewDto[]>(`Review/List/resturant-review?ResturantId=${resturantId}&Limit=4`, RestMethods.Get, { headers: headerContentTypeForJson() });

export const getProductReviewList = (productId: string) => FetchApi<IReviewDto[]>(`Review/List/product-review?ProductId=${productId}&Limit=4`, RestMethods.Get, { headers: headerContentTypeForJson() });

export const getUserReviewHistory = (userId: string) => FetchApi<UserReviewResponse>(`Review/List/History/user-review?UserId=${userId}&Limit=4`, RestMethods.Get, { headers: headerContentTypeForJson() });

export const reviewResturant = (data: SubmitReview) => FetchApi<IReviewDto>(`Review/ReviewResturant`, RestMethods.Post, { body: jsonPayloadFormatter(data), headers: headerContentTypeForJson() });

export const reviewProduct = (data: SubmitReview) => FetchApi<IReviewDto>(`Review/ReviewProduct`, RestMethods.Post, { body: jsonPayloadFormatter(data), headers: headerContentTypeForJson() });