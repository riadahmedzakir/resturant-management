import { CommonQueryResponse } from './../../../../common/request-response/response/common.response';

interface IResturantService {
  getAllResturant: () => CommonQueryResponse;
}

export type { IResturantService };
