import { HttpStatus, Injectable } from '@nestjs/common';
import { IResturantService } from '../contracts/resturant.service.interface';
import { CommonQueryResponse } from '../../../../common/request-response/response/common/common.response';
import { Resturant } from '../../../../common/domain.dtos/resturant.entity';
import { ResturantListQuery } from '../../../../common/request-response/request/resturant/resturant.request.dto';
import { GenericRepositoryService } from '../../../database/services/contracts/repository.service';

@Injectable()
export class ResturantService implements IResturantService {
  constructor(
    private readonly _genericRepositoryService: GenericRepositoryService,
  ) {}

  async getAllResturant(
    query: ResturantListQuery,
  ): Promise<CommonQueryResponse<Resturant[]>> {
    const resturants = await this._genericRepositoryService.getMany<Resturant>(
      'Resturants',
      '{}',
      `{ ${query.SortedBy}: ${query.Order} }`,
      query.Skip,
      query.Limit,
    );

    const response = new CommonQueryResponse<Resturant[]>();
    response.IsScuessful = true;
    response.SuccessResponse = resturants;
    response.StatusCode = HttpStatus.OK;

    return response;
  }
}
