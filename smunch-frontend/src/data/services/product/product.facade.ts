import { getProductList } from "./product.api";

export class ProductFacade {
    static getProductListApi = (resturantId: string) => getProductList(resturantId);
}