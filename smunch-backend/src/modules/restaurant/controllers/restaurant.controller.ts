import { Controller, Get, Query } from '@nestjs/common';
import { CommonQueryResponse } from '../../../common/request-response/response/common/common.response';
import { ResturantService } from '../services/concretes/resturant.service';
import { Resturant } from '../../../common/domain.dtos/resturant.entity';
import { ResturantListQuery } from '../../../common/request-response/request/resturant/resturant.request.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('Resturant')
@ApiTags('Resturant')
export class ResturantController {
  constructor(private readonly _resturantService: ResturantService) {}

  @Get('List')
  async getAllResturant(
    @Query() query: ResturantListQuery,
  ): Promise<CommonQueryResponse<Resturant[]>> {
    return await this._resturantService.getAllResturant(query);
  }
}
