import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Product } from '../../../../common/domain.dtos/product.entity';
import { ProductListQuery } from '../../../../common/request-response/request/product/product.request.dto';
import { CommonQueryResponse } from '../../../../common/request-response/response/common/common.response';
import { ProductController } from '../../controllers/product.controller';
import { ProductService } from '../../services/concretes/product.service';
import { GenericRepositoryService } from '../../../database/services/contracts/repository.service';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService, GenericRepositoryService],
    }).compile();

    productService = moduleRef.get<ProductService>(ProductService);
    productController = moduleRef.get<ProductController>(ProductController);
  });

  describe('getProductList', () => {
    it('should return product list', async () => {
      const query = new ProductListQuery();
      const productList: Product[] = new Array<Product>();
      const response: CommonQueryResponse<Product[]> = {
        SuccessResponse: productList,
        IsScuessful: false,
        StatusCode: HttpStatus.OK,
      };

      jest
        .spyOn(productService, 'getAllProductsByResturantId')
        .mockImplementation(async () => response);

      const result = await productController.getProductListByResturantId(query);

      expect(result).toBe(response);
      expect(productService.getAllProductsByResturantId).toHaveBeenCalledWith(
        query,
      );
    });
  });
});
