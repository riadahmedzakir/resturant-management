import { IResturantDto } from "../../../constants/resturant.interface";
import { RestMethods } from "../../models/RestMethods";
import { headerContentTypeForJson } from "../../util/util";
import { FetchApi } from "../rest-service/rest.service";

export const getResturantList = () => FetchApi<IResturantDto[]>('Resturant/List?Limit=7', RestMethods.Get, { headers: headerContentTypeForJson() });