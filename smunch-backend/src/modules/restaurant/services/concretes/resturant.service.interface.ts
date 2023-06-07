import { ResturantQuery } from './../../../../common/request-response/request/resturant/resturant.query';
import { Resturant } from './../../../../common/domain.dtos/resturant.model';
import { CommonQueryResponse } from './../../../../common/request-response/response/common.response';

interface IResturantService {
  getAllResturant: (query: ResturantQuery) => CommonQueryResponse<Resturant>;
}

export type { IResturantService };
