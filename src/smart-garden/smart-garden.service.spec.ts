import { Test, TestingModule } from '@nestjs/testing';
import { SmartGardenService } from './smart-garden.service';

describe('SmartGardenService', () => {
  let service: SmartGardenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartGardenService],
    }).compile();

    service = module.get<SmartGardenService>(SmartGardenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
