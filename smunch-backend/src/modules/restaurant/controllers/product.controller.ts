import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CommonQueryResponse } from '../../../common/request-response/response/common.response';

@Controller('Product')
export class ProductController {
  //   constructor(private readonly _resturantService: ResturantService) {}

  @Get('List')
  getProductList(): CommonQueryResponse {
    throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED);
  }
}
