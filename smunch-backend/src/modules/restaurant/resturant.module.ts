import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ResturantService } from './services/concretes/resturant.service';
import { ResturantController } from './controllers/restaurant.controller';
import { LoggerMiddleware } from './../../middlewares/logger.middleware';
import { ProductController } from './controllers/product.controller';
import { ReviewController } from './controllers/review.controller';
import { DatabaseModule } from '../database/database.module';
import { GenericRepositoryService } from '../database/services/contracts/repository.service';
import { ProductService } from './services/concretes/product.service';
import { ReviewService } from './services/concretes/review.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ResturantController, ProductController, ReviewController],
  providers: [
    ResturantService,
    ProductService,
    ReviewService,
    GenericRepositoryService,
  ],
})
export class ResturantModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ResturantController);
  }
}
