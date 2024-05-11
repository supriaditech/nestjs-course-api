import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SmartGardenService } from './smart-garden.service';
import { CreateSmartGardenDto } from './dto/CreateSmartGarden.dto';

@Controller('smart-garden')
export class SmartGardenController {
  constructor(private smartGardenService: SmartGardenService) {}

  @Post('/create-data-smartGarden')
  @HttpCode(HttpStatus.CREATED)
  async CreateSmartGardenController(
    @Body() smartGardenDto: CreateSmartGardenDto,
  ) {
    return await this.smartGardenService.createDataSmartGarden(smartGardenDto);
  }

  @Post('/smart-garden-all')
  @HttpCode(HttpStatus.OK)
  async findAllSmartGardenController() {
    return this.smartGardenService.getSmartGardenAll();
  }

  @Post('/smart-garden-by-date')
  @HttpCode(HttpStatus.OK)
  async findByDateSmartGardenController() {
    return this.smartGardenService.getSmartGardenByDate();
  }
}
