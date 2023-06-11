import { Product } from './../../../../common/domain.dtos/product.model';
import { CommonQueryResponse } from '../../../../common/request-response/response/common.response';
import { ProductListQuery } from './../../../../common/request-response/request/product/product.request';

interface IProductService {
  getAllProducts: (
    query: ProductListQuery,
  ) => Promise<CommonQueryResponse<Product[]>>;
}

export type { IProductService };
