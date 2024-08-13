import { Test, TestingModule } from '@nestjs/testing';
import { BasicCrudServiceController } from './basic-crud-service.controller';
import { BasicCrudServiceService } from './basic-crud-service.service';

describe('BasicCrudServiceController', () => {
  let basicCrudServiceController: BasicCrudServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BasicCrudServiceController],
      providers: [BasicCrudServiceService],
    }).compile();

    basicCrudServiceController = app.get<BasicCrudServiceController>(BasicCrudServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(basicCrudServiceController.getHello()).toBe('Hello World!');
    });
  });
});
