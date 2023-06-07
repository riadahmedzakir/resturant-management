import { Controller, Get } from '@nestjs/common';
import { CommonQueryResponse } from '../../../common/request-response/response/common.response';
import { ResturantService } from '../services/contracts/resturant.service';

@Controller('Resturant')
export class ResturantController {
  constructor(private readonly _resturantService: ResturantService) {}

  @Get('List')
  getAllResturant(): CommonQueryResponse {
    return this._resturantService.getAllResturant();
  }
}
