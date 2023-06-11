import { IsNotEmpty, IsString } from 'class-validator';
import { QueryBase } from '../common/common.query.dto';

class ResturantReviewListQuery extends QueryBase {
  @IsNotEmpty()
  ResturantId: string;
}

class ProductReviewListQuery extends QueryBase {
  @IsNotEmpty()
  ProductId: string;
}

class UserReviewListQuery extends QueryBase {
  @IsNotEmpty()
  UserId: string;
}

class SubmitReviewCommand {
  @IsNotEmpty()
  UserId: string;

  @IsNotEmpty()
  ReviewEntityId: string;

  @IsNotEmpty()
  Rating: number;

  @IsString()
  Comment: string;
}

export {
  ResturantReviewListQuery,
  ProductReviewListQuery,
  UserReviewListQuery,
  SubmitReviewCommand,
};
