import { Cuisine } from '../constants/cuisine.constant';

class Resturant {
  _id: string;
  Name: string;
  Description: string;
  OpeningTime: Date;
  ClosingTime: Date;
  Cuisine: Cuisine[];
  Rating: string;
}

export { Resturant };
