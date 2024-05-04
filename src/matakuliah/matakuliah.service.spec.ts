import { Test, TestingModule } from '@nestjs/testing';
import { MatakuliahService } from './matakuliah.service';

describe('MatakuliahService', () => {
  let service: MatakuliahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatakuliahService],
    }).compile();

    service = module.get<MatakuliahService>(MatakuliahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
