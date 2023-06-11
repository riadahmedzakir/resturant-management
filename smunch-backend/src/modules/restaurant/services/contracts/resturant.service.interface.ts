import { ResturantListQuery } from '../../../../common/request-response/request/resturant/resturant.request.dto';
import { Resturant } from '../../../../common/domain.dtos/resturant.entity';
import { CommonQueryResponse } from '../../../../common/request-response/response/common/common.response';

interface IResturantService {
  getAllResturant: (
    query: ResturantListQuery,
  ) => Promise<CommonQueryResponse<Resturant[]>>;
}

export type { IResturantService };
