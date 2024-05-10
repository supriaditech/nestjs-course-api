import { Test, TestingModule } from '@nestjs/testing';
import { SmartGardenController } from './smart-garden.controller';

describe('SmartGardenController', () => {
  let controller: SmartGardenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartGardenController],
    }).compile();

    controller = module.get<SmartGardenController>(SmartGardenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
