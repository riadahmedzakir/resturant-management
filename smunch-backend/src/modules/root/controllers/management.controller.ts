import { Controller, Get } from '@nestjs/common';
import { ManagementService } from '../services/contracts/management.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('Management')
@ApiTags('Management')
export class ManagementController {
  constructor(private readonly managementService: ManagementService) {}

  @Get('Ping')
  getServiceStatus(): string {
    return this.managementService.getStatus();
  }
}
