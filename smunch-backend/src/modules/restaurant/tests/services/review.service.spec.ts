import { Test, TestingModule } from '@nestjs/testing';
import { GenericRepositoryService } from '../../../database/services/contracts/repository.service';
import {
  CommonCommandResponse,
  CommonQueryResponse,
} from '../../../../common/request-response/response/common/common.response';
import { ReviewService } from '../../services/concretes/review.service';
import {
  ProductReviewListQuery,
  ResturantReviewListQuery,
  SubmitReviewCommand,
  UserReviewListQuery,
} from './../../../../common/request-response/request/review/review.request.dto';
import { Review } from './../../../../common/domain.dtos/review.entity';
import { UserReviewResponse } from 'src/common/request-response/response/review/user-review.response.dto';

describe('ReviewService', () => {
  let reviewService: ReviewService;
  let genericRepositoryService: GenericRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        {
          provide: GenericRepositoryService,
          useValue: {
            getMany: jest.fn(),
            insertOne: jest.fn(),
          },
        },
      ],
    }).compile();

    reviewService = module.get<ReviewService>(ReviewService);
    genericRepositoryService = module.get<GenericRepositoryService>(
      GenericRepositoryService,
    );
  });

  describe('getAllReviewByResturantId', () => {
    it('should return a list of resturants reviews', async () => {
      const query: ResturantReviewListQuery = {
        SortedBy: 'Name',
        Order: 1,
        Skip: 0,
        Limit: 0,
        ResturantId: '',
      };
      const reviews: Review[] = [];
      const response: CommonQueryResponse<Review[]> = {
        IsScuessful: true,
        SuccessResponse: reviews,
        StatusCode: 200,
      };

      jest
        .spyOn(genericRepositoryService, 'getMany')
        .mockResolvedValue(reviews);

      const result = await reviewService.getAllReviewByResturantId(query);

      expect(result).toEqual(response);
      expect(genericRepositoryService.getMany).toHaveBeenCalledWith(
        'Reviews',
        `{ "ReviewEntityName" : "Resturant", "ReviewEntityId" : "${query.ResturantId}" }`,
        `{ "${query.SortedBy}": ${query.Order} }`,
        query.Skip,
        query.Limit,
      );
    });
  });

  describe('getAllReviewByProductId', () => {
    it('should return a list of product reviews', async () => {
      const query: ProductReviewListQuery = {
        SortedBy: 'Name',
        Order: 1,
        Skip: 0,
        Limit: 0,
        ProductId: '',
      };
      const reviews: Review[] = [];
      const response: CommonQueryResponse<Review[]> = {
        IsScuessful: true,
        SuccessResponse: reviews,
        StatusCode: 200,
      };

      jest
        .spyOn(genericRepositoryService, 'getMany')
        .mockResolvedValue(reviews);

      const result = await reviewService.getAllReviewByProductId(query);

      expect(result).toEqual(response);
      expect(genericRepositoryService.getMany).toHaveBeenCalledWith(
        'Reviews',
        `{ "ReviewEntityName" : "Product", "ReviewEntityId" : "${query.ProductId}" }`,
        `{ "${query.SortedBy}": ${query.Order} }`,
        query.Skip,
        query.Limit,
      );
    });
  });

  describe('getAllReviewByUserId', () => {
    it('should return a list of user review resturant', async () => {
      const query: UserReviewListQuery = {
        SortedBy: 'Name',
        Order: 1,
        Skip: 0,
        Limit: 0,
        UserId: '',
      };
      const reviews: Review[] = [];

      const userReviews: UserReviewResponse = {
        ResturantReviews: reviews,
        ProductReviews: reviews,
      };
      const response: CommonQueryResponse<UserReviewResponse> = {
        IsScuessful: true,
        SuccessResponse: userReviews,
        StatusCode: 200,
      };

      jest
        .spyOn(genericRepositoryService, 'getMany')
        .mockResolvedValue(reviews);

      const result = await reviewService.getAllReviewByUserId(query);

      expect(result).toEqual(response);
      expect(genericRepositoryService.getMany).toHaveBeenCalledWith(
        'Reviews',
        `{ "ReviewEntityName" : "Product", "UserId" : "${query.UserId}" }`,
        `{ "${query.SortedBy}": ${query.Order} }`,
        query.Skip,
        query.Limit,
      );
      expect(genericRepositoryService.getMany).toHaveBeenCalledWith(
        'Reviews',
        `{ "ReviewEntityName" : "Resturant", "UserId" : "${query.UserId}" }`,
        `{ "${query.SortedBy}": ${query.Order} }`,
        query.Skip,
        query.Limit,
      );
    });
  });

  describe('submitResturantReview', () => {
    it('should submit a new resturant review', async () => {
      const command: SubmitReviewCommand = {
        UserId: '',
        ReviewEntityId: '',
        Rating: 0,
        Comment: '',
      };
      const review: Review = {
        _id: expect.any(String),
        UserId: '',
        ReviewEntityId: '',
        ReviewEntityName: 'Resturant',
        Rating: 0,
        Comment: '',
      };
      const response: CommonCommandResponse<Review> = {
        IsScuessful: true,
        SuccessResponse: review,
        StatusCode: 200,
        Erros: [],
      };

      jest
        .spyOn(genericRepositoryService, 'insertOne')
        .mockResolvedValue(review);

      const result = await reviewService.submitResturantReview(command);

      expect(result).toEqual(response);
      expect(genericRepositoryService.insertOne).toHaveBeenCalledWith(
        'Reviews',
        expect.objectContaining(review),
      );
    });
  });

  describe('submitProductReview', () => {
    it('should submit a new product review', async () => {
      const command: SubmitReviewCommand = {
        UserId: '',
        ReviewEntityId: '',
        Rating: 0,
        Comment: '',
      };
      const review: Review = {
        _id: expect.any(String),
        UserId: '',
        ReviewEntityId: '',
        ReviewEntityName: 'Product',
        Rating: 0,
        Comment: '',
      };
      const response: CommonCommandResponse<Review> = {
        IsScuessful: true,
        SuccessResponse: review,
        StatusCode: 200,
        Erros: [],
      };

      jest
        .spyOn(genericRepositoryService, 'insertOne')
        .mockResolvedValue(review);

      const result = await reviewService.submitProductReview(command);

      expect(result).toEqual(response);
      expect(genericRepositoryService.insertOne).toHaveBeenCalledWith(
        'Reviews',
        expect.objectContaining(review),
      );
    });
  });
});
