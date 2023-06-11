import { HttpStatus, Injectable } from '@nestjs/common';
import { CommonQueryResponse } from '../../../../common/request-response/response/common/common.response';
import { GenericRepositoryService } from '../../../database/services/contracts/repository.service';
import { IProductService } from '../contracts/product.service.interface';
import { ProductListQuery } from 'src/common/request-response/request/product/product.request.dto';
import { Product } from 'src/common/domain.dtos/product.entity';

@Injectable()
export class ProductService implements IProductService {
  constructor(
    private readonly _genericRepositoryService: GenericRepositoryService,
  ) {}

  async getAllProducts(
    query: ProductListQuery,
  ): Promise<CommonQueryResponse<Product[]>> {
    const products = await this._genericRepositoryService.getMany<Product>(
      'Products',
      '{}',
      `{ ${query.SortedBy}: ${query.Order} }`,
      query.Skip,
      query.Limit,
    );

    const response = new CommonQueryResponse<Product[]>();
    response.IsScuessful = true;
    response.SuccessResponse = products;
    response.StatusCode = HttpStatus.OK;

    return response;
  }
}
