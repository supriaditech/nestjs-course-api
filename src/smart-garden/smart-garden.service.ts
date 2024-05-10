import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSmartGardenDto } from './dto/CreateSmartGarden.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SmartGardenService {
  constructor(private prisma: PrismaService) {}

  async createDataSmartGarden(data: CreateSmartGardenDto) {
    try {
      const createSmartGarden = await this.prisma.smartGarden.create({
        data: data,
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Mata Kuliah berhasil dibuat',
        data: createSmartGarden,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Kode Mata Kuliah tidak boleh sama, sudah digunakan',
          error: error.message,
        };
      }
    }
  }
}
