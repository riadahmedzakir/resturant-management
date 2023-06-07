import { Controller, Get } from '@nestjs/common';
import { ManagementService } from '../services/contracts/root.service';

@Controller('Management')
export class ManagementController {
  constructor(private readonly managementService: ManagementService) {}

  @Get('Ping')
  getServiceStatus(): string {
    return this.managementService.getStatus();
  }
}
