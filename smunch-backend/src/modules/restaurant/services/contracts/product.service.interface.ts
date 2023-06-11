import { Product } from '../../../../common/domain.dtos/product.entity';
import { CommonQueryResponse } from '../../../../common/request-response/response/common/common.response';
import { ProductListQuery } from '../../../../common/request-response/request/product/product.request.dto';

interface IProductService {
  getAllProducts: (
    query: ProductListQuery,
  ) => Promise<CommonQueryResponse<Product[]>>;
}

export type { IProductService };
