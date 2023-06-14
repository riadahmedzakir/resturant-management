import { IReviewDto } from "../../../constants/review.interface";
import { UserReviewResponse } from "../../../constants/user-review.interface";
import { RestMethods } from "../../models/RestMethods";
import { headerContentTypeForJson } from "../../util/util";
import { FetchApi } from "../rest-service/rest.service";

export const getResturantReviewList = (resturantId: string) => FetchApi<IReviewDto[]>(`Review/List?ResturantId=${resturantId}&Limit=4`, RestMethods.Get, { headers: headerContentTypeForJson() });

export const getProductReviewList = (productId: string) => FetchApi<IReviewDto[]>(`Review/List?ProductId=${productId}&Limit=4`, RestMethods.Get, { headers: headerContentTypeForJson() });

export const getUserReviewHistory = (userId: string) => FetchApi<UserReviewResponse>(`Review/List/History/user-review?UserId=${userId}&Limit=4`, RestMethods.Get, { headers: headerContentTypeForJson() });