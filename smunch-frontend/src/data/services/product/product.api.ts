import { IProductDto } from "../../../constants/product.interface";
import { RestMethods } from "../../models/RestMethods";
import { headerContentTypeForJson } from "../../util/util";
import { FetchApi } from "../rest-service/rest.service";

export const getProductList = (resturantId: string) => FetchApi<IProductDto[]>(`Product/List?ResturantId=${resturantId}&Limit=7`, RestMethods.Get, { headers: headerContentTypeForJson() });