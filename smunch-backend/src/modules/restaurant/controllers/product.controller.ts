import { Controller, Get, Query } from '@nestjs/common';
import { CommonQueryResponse } from '../../../common/request-response/response/common/common.response';
import { ProductService } from '../services/concretes/product.service';
import { Product } from '../../../common/domain.dtos/product.entity';
import { ProductListQuery } from '../../../common/request-response/request/product/product.request.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('Product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Get('List')
  @ApiOkResponse({
    description: 'Success',
    type: Array<Product>,
  })
  async getProductList(
    @Query() query: ProductListQuery,
  ): Promise<CommonQueryResponse<Product[]>> {
    return await this._productService.getAllProducts(query);
  }
}
