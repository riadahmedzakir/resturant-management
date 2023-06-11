import { ResturantListQuery } from '../../../../common/request-response/request/resturant/resturant.request';
import { Resturant } from '../../../../common/domain.dtos/resturant.model';
import { CommonQueryResponse } from '../../../../common/request-response/response/common.response';

interface IResturantService {
  getAllResturant: (
    query: ResturantListQuery,
  ) => Promise<CommonQueryResponse<Resturant[]>>;
}

export type { IResturantService };
