import { getResturantList } from "./resturant.api";

export class ResturantFacade {
    static getResturantListApi = () => getResturantList();
}