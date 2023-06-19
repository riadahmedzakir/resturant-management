import { IResturantDto } from "../../../constants/resturant.interface";
import { RestMethods } from "../../models/RestMethods";
import { headerContentTypeForJson } from "../../util/util";
import { FetchApi } from "../rest-service/rest.service";

export const getResturantList = (sort: string | null, budget: string | null, cuisine: string | null) =>
    FetchApi<IResturantDto[]>(`Resturant/List?Limit=7&sort=${sort}&budget=${budget}&cuisine=${cuisine}`, RestMethods.Get, { headers: headerContentTypeForJson() });