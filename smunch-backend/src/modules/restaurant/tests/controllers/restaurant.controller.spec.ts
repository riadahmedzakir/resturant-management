import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ResturantController } from '../../controllers/restaurant.controller';
import { ResturantService } from '../../services/concretes/resturant.service';
import { GenericRepositoryService } from './../../../../modules/database/services/contracts/repository.service';
import { ResturantListQuery } from './../../../../common/request-response/request/resturant/resturant.request.dto';
import { Resturant } from './../../../../common/domain.dtos/resturant.entity';
import { CommonQueryResponse } from './../../../../common/request-response/response/common/common.response';

describe('ResturantController', () => {
  let resturantController: ResturantController;
  let resturantService: ResturantService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ResturantController],
      providers: [ResturantService, GenericRepositoryService],
    }).compile();

    resturantService = moduleRef.get<ResturantService>(ResturantService);
    resturantController =
      moduleRef.get<ResturantController>(ResturantController);
  });

  describe('getAllResturant', () => {
    it('should return resturant list', async () => {
      const query = new ResturantListQuery();
      const resturantList: Resturant[] = new Array<Resturant>();
      const response: CommonQueryResponse<Resturant[]> = {
        SuccessResponse: resturantList,
        IsScuessful: false,
        StatusCode: HttpStatus.OK,
      };

      jest
        .spyOn(resturantService, 'getAllResturant')
        .mockImplementation(async () => response);

      const result = await resturantController.getAllResturant(query);

      expect(result).toBe(response);
      expect(resturantService.getAllResturant).toHaveBeenCalledWith(query);
    });
  });
});
