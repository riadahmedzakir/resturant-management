import { Injectable } from '@nestjs/common';
import { IRootServce } from '../concretes/root.service.interface';

@Injectable()
export class ManagementService implements IRootServce {
  getStatus(): string {
    return 'The service is running';
  }
}
