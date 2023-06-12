import { Test, TestingModule } from '@nestjs/testing';
import { GenericRepositoryService } from '../../../database/services/contracts/repository.service';
import { CommonQueryResponse } from '../../../../common/request-response/response/common/common.response';
import { ResturantListQuery } from '../../../../common/request-response/request/resturant/resturant.request.dto';
import { Resturant } from '../../../../common/domain.dtos/resturant.entity';
import { ResturantService } from '../../services/concretes/resturant.service';

describe('ResturantService', () => {
  let resturantService: ResturantService;
  let genericRepositoryService: GenericRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResturantService,
        {
          provide: GenericRepositoryService,
          useValue: {
            getMany: jest.fn(),
          },
        },
      ],
    }).compile();

    resturantService = module.get<ResturantService>(ResturantService);
    genericRepositoryService = module.get<GenericRepositoryService>(
      GenericRepositoryService,
    );
  });

  describe('getAllResturant', () => {
    it('should return a list of resturants', async () => {
      const query: ResturantListQuery = {
        SortedBy: '',
        Order: 0,
        Skip: 0,
        Limit: 0,
      };
      const resturants: Resturant[] = [];
      const response: CommonQueryResponse<Resturant[]> = {
        IsScuessful: true,
        SuccessResponse: resturants,
        StatusCode: 200,
      };

      jest
        .spyOn(genericRepositoryService, 'getMany')
        .mockResolvedValue(resturants);

      const result = await resturantService.getAllResturant(query);

      expect(result).toEqual(response);
      expect(genericRepositoryService.getMany).toHaveBeenCalledWith(
        'Resturants',
        '{}',
        `{ "${query.SortedBy}": ${query.Order} }`,
        query.Skip,
        query.Limit,
      );
    });
  });
});
