import { Controller, Get, Query } from '@nestjs/common';
import { CommonQueryResponse } from '../../../common/request-response/response/common.response';
import { ResturantService } from '../services/concretes/resturant.service';
import { Resturant } from './../../../common/domain.dtos/resturant.model';
import { ResturantListQuery } from '../../../common/request-response/request/resturant/resturant.request';

@Controller('Resturant')
export class ResturantController {
  constructor(private readonly _resturantService: ResturantService) {}

  @Get('List')
  async getAllResturant(
    @Query() query: ResturantListQuery,
  ): Promise<CommonQueryResponse<Resturant[]>> {
    return await this._resturantService.getAllResturant(query);
  }
}
