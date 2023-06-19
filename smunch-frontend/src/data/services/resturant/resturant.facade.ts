import { getResturantList } from "./resturant.api";

export class ResturantFacade {
    static getResturantListApi = (sort: string | null, budget: string | null, cuisine: string | null) => getResturantList(sort, budget, cuisine);
}