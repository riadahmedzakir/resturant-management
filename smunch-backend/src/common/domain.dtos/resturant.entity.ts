import { Cuisine } from '../constants/cuisine.constant';

class Resturant {
  _id: string;
  Name: string;
  Address: string;
  OpeningTime: Date;
  ClosingTime: Date;
  Cuisine: Cuisine[];
  Rating: string;
}

export { Resturant };
