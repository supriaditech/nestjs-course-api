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
}
