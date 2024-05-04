import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MatakuliahModule } from './matakuliah/matakuliah.module';

@Module({
  imports: [PrismaModule, MatakuliahModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
