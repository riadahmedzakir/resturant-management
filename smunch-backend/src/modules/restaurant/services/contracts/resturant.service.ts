import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IResturantService } from '../concretes/resturant.service.interface';
import { CommonQueryResponse } from './../../../../common/request-response/response/common.response';
import { Resturant } from './../../../../common/domain.dtos/resturant.model';
import { ResturantQuery } from './../../../../common/request-response/request/resturant/resturant.query';

@Injectable()
export class ResturantService implements IResturantService {
  getAllResturant(query: ResturantQuery): CommonQueryResponse<Resturant> {
    throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED);
  }
}
