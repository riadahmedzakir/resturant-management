import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ManagementController } from './controllers/management.controller';
import { ManagementService } from './services/contracts/root.service';
import { LoggerMiddleware } from './../../middlewares/logger.middleware';
import { ResturantModule } from '../restaurant/resturant.module';

@Module({
  imports: [ResturantModule],
  controllers: [ManagementController],
  providers: [ManagementService],
})
export class RootModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ManagementController);
  }
}
