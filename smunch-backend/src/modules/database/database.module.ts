import { Module } from '@nestjs/common';
import { GenericRepository } from './services/contracts/repository.service';

@Module({
  imports: [],
  controllers: [],
  providers: [GenericRepository],
  exports: [DatabaseModule],
})
export class DatabaseModule {}
