import { IsNotEmpty } from 'class-validator';
import { QueryBase } from '../common/common.query.dto';

class ProductListQuery extends QueryBase {
  @IsNotEmpty()
  ResturantId: string;
}

export { ProductListQuery };
