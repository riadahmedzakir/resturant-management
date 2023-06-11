import { Controller, Get, Query } from '@nestjs/common';
import { CommonQueryResponse } from '../../../common/request-response/response/common.response';
import { ProductService } from '../services/concretes/product.service';
import { Product } from './../../../common/domain.dtos/product.model';
import { ProductListQuery } from './../../../common/request-response/request/product/product.request';

@Controller('Product')
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Get('List')
  async getProductList(
    @Query() query: ProductListQuery,
  ): Promise<CommonQueryResponse<Product[]>> {
    return await this._productService.getAllProducts(query);
  }
}
