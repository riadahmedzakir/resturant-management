import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IResturantService } from '../concretes/resturant.service.interface';
import { CommonQueryResponse } from './../../../../common/request-response/response/common.response';

@Injectable()
export class ResturantService implements IResturantService {
  getAllResturant(): CommonQueryResponse {
    throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED);
  }
}
