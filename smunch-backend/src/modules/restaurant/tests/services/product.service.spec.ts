import { Test, TestingModule } from '@nestjs/testing';
import { Product } from './../../../../common/domain.dtos/product.entity';
import { ProductListQuery } from './../../../../common/request-response/request/product/product.request.dto';
import { CommonQueryResponse } from './../../../../common/request-response/response/common/common.response';
import { GenericRepositoryService } from './../../../../modules/database/services/contracts/repository.service';
import { ProductService } from '../../services/concretes/product.service';

describe('ProductService', () => {
  let productService: ProductService;
  let genericRepositoryService: GenericRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: GenericRepositoryService,
          useValue: {
            getMany: jest.fn(),
          },
        },
      ],
    }).compile();

    productService = module.get<ProductService>(ProductService);
    genericRepositoryService = module.get<GenericRepositoryService>(
      GenericRepositoryService,
    );
  });

  describe('getAllProducts', () => {
    it('should return a list of products', async () => {
      const query: ProductListQuery = {
        SortedBy: '',
        Order: 0,
        Skip: 0,
        Limit: 0,
        ResturantId: '',
      };
      const products: Product[] = [];
      const response: CommonQueryResponse<Product[]> = {
        IsScuessful: true,
        SuccessResponse: products,
        StatusCode: 200,
      };

      jest
        .spyOn(genericRepositoryService, 'getMany')
        .mockResolvedValue(products);

      const result = await productService.getAllProductsByResturantId(query);

      expect(result).toEqual(response);
      expect(genericRepositoryService.getMany).toHaveBeenCalledWith(
        'Products',
        `{ "ResturantId" :  "${query.ResturantId}" }`,
        `{ "${query.SortedBy}": "${query.Order}" }`,
        query.Skip,
        query.Limit,
      );
    });
  });
});
