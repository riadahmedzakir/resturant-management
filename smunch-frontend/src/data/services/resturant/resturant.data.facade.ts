import { IResturantDto } from "../../../constants/resturant.interface";
import { ResturantFacade } from "./resturant.facade";

export class ResturantDataFacade {
    static getResturantList = async ({ request }: any): Promise<IResturantDto[]> => {
        const sort = new URL(request.url).searchParams.get('sort');
        const budget = new URL(request.url).searchParams.get('budget');
        const cuisine = new URL(request.url).searchParams.get('cuisine');

        var response = await ResturantFacade.getResturantListApi(sort, budget, cuisine);
        return response.data?.SuccessResponse ?? [];
    }
}