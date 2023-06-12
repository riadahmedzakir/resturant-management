import { Injectable } from '@nestjs/common';
import { IManagementService } from '../concretes/management.service.interface';

@Injectable()
export class ManagementService implements IManagementService {
  getStatus(): string {
    return 'The service is running';
  }
}
