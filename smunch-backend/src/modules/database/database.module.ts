import { Module } from '@nestjs/common';
import { GenericRepositoryService } from './services/contracts/repository.service';

@Module({
  imports: [],
  controllers: [],
  providers: [GenericRepositoryService],
  exports: [DatabaseModule],
})
export class DatabaseModule {}
