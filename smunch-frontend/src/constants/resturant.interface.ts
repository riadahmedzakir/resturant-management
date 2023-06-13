import { Cuisine } from "./cuisine.constant";

interface IResturantDto {
    _id: string;
    Name: string;
    Description: string;
    OpeningTime: Date;
    ClosingTime: Date;
    Cuisine: Cuisine[];
    Rating: string;
}

export type { IResturantDto };