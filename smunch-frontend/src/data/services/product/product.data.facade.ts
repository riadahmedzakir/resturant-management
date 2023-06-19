import { IProductDto } from "../../../constants/product.interface";
import { IReviewDto } from "../../../constants/review.interface";
import { ReviewFacade } from "../review/review.facade";
import { ProductFacade } from "./product.facade";

export class ProductDataFacade {
    static getProductList = async ({ params }: any): Promise<{ products: IProductDto[], reviews: IReviewDto[] }> => {
        const resturantId = params[`id`];

        var products = (await ProductFacade.getProductListApi(resturantId)).data?.SuccessResponse ?? [];
        var reviews = (await ReviewFacade.getResturantReviewListApi(resturantId)).data?.SuccessResponse ?? [];

        return {
            products,
            reviews
        };
    }
}