import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ResturantService } from './services/contracts/resturant.service';
import { ResturantController } from './controllers/restaurant.controller';
import { LoggerMiddleware } from './../../middlewares/logger.middleware';
import { ProductController } from './controllers/product.controller';
import { ReviewController } from './controllers/review.controller';

@Module({
  imports: [],
  controllers: [ResturantController, ProductController, ReviewController],
  providers: [ResturantService],
})
export class ResturantModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ResturantController);
  }
}
