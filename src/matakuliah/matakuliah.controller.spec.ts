import { Test, TestingModule } from '@nestjs/testing';
import { MatakuliahController } from './matakuliah.controller';

describe('MatakuliahController', () => {
  let controller: MatakuliahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatakuliahController],
    }).compile();

    controller = module.get<MatakuliahController>(MatakuliahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
