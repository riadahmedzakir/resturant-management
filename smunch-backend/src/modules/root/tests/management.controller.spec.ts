import { Test } from '@nestjs/testing';
import { ManagementController } from '../controllers/management.controller';
import { ManagementService } from '../services/contracts/management.service';

describe('ManagementController', () => {
  let managementController: ManagementController;
  let managementService: ManagementService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ManagementController],
      providers: [ManagementService],
    }).compile();

    managementService = moduleRef.get<ManagementService>(ManagementService);
    managementController =
      moduleRef.get<ManagementController>(ManagementController);
  });

  describe('getStatus', () => {
    it('should return service status', async () => {
      const result = 'The service is running';
      jest
        .spyOn(managementService, 'getStatus')
        .mockImplementation(() => result);

      expect(await managementController.getServiceStatus()).toBe(result);
    });
  });
});
