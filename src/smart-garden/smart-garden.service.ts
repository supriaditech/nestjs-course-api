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
        message: 'data smart garden berhasil dibuat',
        data: createSmartGarden,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Kode data smart garden tidak boleh sama, sudah digunakan',
          error: error.message,
        };
      }
    }
  }

  async getSmartGardenAll() {
    try {
      const findAllSmartGarden = await this.prisma.smartGarden.findMany();

      // Jika data smart garden berhasil dibuat, kembalikan response sukses
      return {
        statusCode: HttpStatus.OK,
        message: 'Data smart garden berhasil di ambil',
        data: findAllSmartGarden,
      };
    } catch (error) {
      // Jika terjadi error, kembalikan response gagal
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Gagal membuat data smart garden',
        error: error.message,
      };
    }
  }

  async getSmartGardenByDate() {
    try {
      const latestSmartGarden = await this.prisma.smartGarden.findFirst({
        orderBy: {
          createdAt: 'desc', // Anggap 'createdAt' adalah field untuk timestamp pembuatan
        },
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'Data smart garden berhasil diambil',
        data: latestSmartGarden,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Gagal mengambil data smart garden',
        error: error.message,
      };
    }
  }
}
