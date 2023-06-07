import { Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CommonCommandResponse } from '../../../common/request-response/response/common.response';

@Controller('Review')
export class ReviewController {
  //   constructor(private readonly _resturantService: ResturantService) {}

  @Post('ReviewProduct')
  reviewProduct(): CommonCommandResponse {
    throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  @Post('ReviewResturant')
  reviewResturant(): CommonCommandResponse {
    throw new HttpException('Not Implemented', HttpStatus.NOT_IMPLEMENTED);
  }
}
