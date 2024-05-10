import { Module } from '@nestjs/common';
import { SmartGardenService } from './smart-garden.service';
import { SmartGardenController } from './smart-garden.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [SmartGardenService],
  controllers: [SmartGardenController],
  imports: [PrismaModule],
})
export class SmartGardenModule {}
