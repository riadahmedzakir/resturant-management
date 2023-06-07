import { Controller, Get, Query } from '@nestjs/common';
import { CommonQueryResponse } from '../../../common/request-response/response/common.response';
import { ResturantService } from '../services/contracts/resturant.service';
import { Resturant } from './../../../common/domain.dtos/resturant.model';
import { ResturantQuery } from './../../../common/request-response/request/resturant/resturant.query';

@Controller('Resturant')
export class ResturantController {
  constructor(private readonly _resturantService: ResturantService) {}

  @Get('List')
  getAllResturant(
    @Query() query: ResturantQuery,
  ): CommonQueryResponse<Resturant> {
    return this._resturantService.getAllResturant(query);
  }
}
