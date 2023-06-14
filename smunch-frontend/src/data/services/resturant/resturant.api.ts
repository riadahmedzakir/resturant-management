import { RestMethods } from "../../models/RestMethods";
import { headerContentTypeForJson } from "../../util/util";
import { FetchApi } from "../rest-service/rest.service";

export const getResturantList = () => FetchApi<any>('/getAll', RestMethods.Get, { headers: headerContentTypeForJson(), });