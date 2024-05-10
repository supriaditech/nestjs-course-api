import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MatakuliahModule } from './matakuliah/matakuliah.module';
import { SmartGardenModule } from './smart-garden/smart-garden.module';

@Module({
  imports: [PrismaModule, MatakuliahModule, SmartGardenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
