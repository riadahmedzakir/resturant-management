import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ReviewController } from '../../controllers/review.controller';
import { ReviewService } from '../../services/concretes/review.service';
import { GenericRepositoryService } from './../../../../modules/database/services/contracts/repository.service';
import {
  ProductReviewListQuery,
  ResturantReviewListQuery,
  SubmitReviewCommand,
  UserReviewListQuery,
} from './../../../../common/request-response/request/review/review.request.dto';
import { Review } from './../../../../common/domain.dtos/review.entity';
import {
  CommonCommandResponse,
  CommonQueryResponse,
} from './../../../../common/request-response/response/common/common.response';
import { UserReviewResponse } from './../../../../common/request-response/response/review/user-review.response.dto';

describe('ReviewController', () => {
  let reviewController: ReviewController;
  let reviewService: ReviewService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ReviewController],
      providers: [ReviewService, GenericRepositoryService],
    }).compile();

    reviewService = moduleRef.get<ReviewService>(ReviewService);
    reviewController = moduleRef.get<ReviewController>(ReviewController);
  });

  describe('getAllReviewByResturantId', () => {
    it('should return resturant reviews by resutrant id', async () => {
      const query = new ResturantReviewListQuery();
      const reviewList: Review[] = new Array<Review>();
      const response: CommonQueryResponse<Review[]> = {
        SuccessResponse: reviewList,
        IsScuessful: false,
        StatusCode: HttpStatus.OK,
      };

      jest
        .spyOn(reviewService, 'getAllReviewByResturantId')
        .mockImplementation(async () => response);

      const result = await reviewController.getResturantReviewByResturantId(
        query,
      );

      expect(result).toBe(response);
      expect(reviewService.getAllReviewByResturantId).toHaveBeenCalledWith(
        query,
      );
    });
  });

  describe('getProductReviewByProductId', () => {
    it('should return product reviews by product id', async () => {
      const query = new ProductReviewListQuery();
      const reviewList: Review[] = new Array<Review>();
      const response: CommonQueryResponse<Review[]> = {
        SuccessResponse: reviewList,
        IsScuessful: false,
        StatusCode: HttpStatus.OK,
      };

      jest
        .spyOn(reviewService, 'getAllReviewByProductId')
        .mockImplementation(async () => response);

      const result = await reviewController.getProductReviewByProductId(query);

      expect(result).toBe(response);
      expect(reviewService.getAllReviewByProductId).toHaveBeenCalledWith(query);
    });
  });

  describe('getUserReviewHistoryByUserId', () => {
    it('should return user review history for both resturant and products', async () => {
      const query = new UserReviewListQuery();
      const userReviewResponse: UserReviewResponse = new UserReviewResponse();
      const response: CommonQueryResponse<UserReviewResponse> = {
        SuccessResponse: userReviewResponse,
        IsScuessful: false,
        StatusCode: HttpStatus.OK,
      };

      jest
        .spyOn(reviewService, 'getAllReviewByUserId')
        .mockImplementation(async () => response);

      const result = await reviewController.getUserReviewHistoryByUserId(query);

      expect(result).toBe(response);
      expect(reviewService.getAllReviewByUserId).toHaveBeenCalledWith(query);
    });
  });

  describe('reviewResturant', () => {
    it('should submit successful review for resturant', async () => {
      const query = new SubmitReviewCommand();
      const review: Review = {
        _id: '',
        UserId: '',
        ReviewEntityId: '',
        ReviewEntityName: 'Resturant',
        Rating: 0,
        Comment: '',
      };
      const response: CommonCommandResponse<Review> = {
        SuccessResponse: review,
        IsScuessful: false,
        StatusCode: HttpStatus.OK,
        Erros: [],
      };

      jest
        .spyOn(reviewService, 'submitResturantReview')
        .mockImplementation(async () => response);

      const result = await reviewController.reviewResturant(query);

      expect(result).toBe(response);
      expect(reviewService.submitResturantReview).toHaveBeenCalledWith(query);
    });
  });

  describe('reviewProduct', () => {
    it('should submit successful review for product', async () => {
      const query = new SubmitReviewCommand();
      const review: Review = {
        _id: '',
        UserId: '',
        ReviewEntityId: '',
        ReviewEntityName: 'Product',
        Rating: 0,
        Comment: '',
      };
      const response: CommonCommandResponse<Review> = {
        SuccessResponse: review,
        IsScuessful: false,
        StatusCode: HttpStatus.OK,
        Erros: [],
      };

      jest
        .spyOn(reviewService, 'submitProductReview')
        .mockImplementation(async () => response);

      const result = await reviewController.reviewProduct(query);

      expect(result).toBe(response);
      expect(reviewService.submitProductReview).toHaveBeenCalledWith(query);
    });
  });
});
