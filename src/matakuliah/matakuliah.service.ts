import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateMataKuliahDto } from './dto/matakuliah.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MatakuliahService {
  constructor(private prisma: PrismaService) {}
  async CreateMatakuliah(data: CreateMataKuliahDto) {
    try {
      const createMatakuliah = await this.prisma.mataKuliah.create({
        data: data,
      });

      // Jika mata kuliah berhasil dibuat, kembalikan response sukses
      return {
        statusCode: HttpStatus.OK,
        message: 'Mata Kuliah berhasil dibuat',
        data: createMatakuliah,
      };
    } catch (error) {
      // Menangkap dan menangani error khusus untuk duplikasi kode mata kuliah
      // Menangkap error duplikasi kode mata kuliah dengan cara yang lebih fleksibel
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

      // Jika terjadi error lain, kembalikan response gagal
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Gagal membuat Mata Kuliah',
        error: error.message,
      };
    }
  }

  async FindAllMatakuliah() {
    try {
      const findAllMataKuliah = await this.prisma.mataKuliah.findMany();

      // Jika mata kuliah berhasil dibuat, kembalikan response sukses
      return {
        statusCode: HttpStatus.OK,
        message: 'Mata Kuliah Diambil',
        data: findAllMataKuliah,
      };
    } catch (error) {
      // Jika terjadi error, kembalikan response gagal
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Gagal membuat Mata Kuliah',
        error: error.message,
      };
    }
  }

  async EditMataKuliah(data: CreateMataKuliahDto) {
    try {
      const { kodeMataKuliah, ...updateData } = data; // Destructure kodeMataKuliah dan data yang akan diupdate
      const editMataKuliah = await this.prisma.mataKuliah.update({
        where: { kodeMataKuliah: kodeMataKuliah },
        data: updateData,
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Mata Kuliah berhasil diedit',
        data: editMataKuliah,
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

      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Gagal mengedit Mata Kuliah', // Memperbaiki pesan error untuk mencerminkan operasi yang tepat
        error: error.message,
      };
    }
  }

  async EditKodeMataKuliah(kodeMataKuliah: string, data: CreateMataKuliahDto) {
    try {
      const editMataKuliah = await this.prisma.mataKuliah.update({
        where: {
          kodeMataKuliah: kodeMataKuliah, // Menentukan record yang akan diupdate berdasarkan kode mata kuliah
        },
        data: data, // Data baru yang akan diterapkan pada record tersebut
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'Mata Kuliah berhasil diedit',
        data: editMataKuliah,
      };
    } catch (error) {
      console.log(error); // Tambahkan ini untuk debugging

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

      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Gagal mengedit Mata Kuliah', // Memperbaiki pesan error untuk mencerminkan operasi yang tepat
        error: error.message,
      };
    }
  }

  async DeleteMatakuliahService(kodeMataKuliah: string) {
    try {
      const deleteMatakuliah = await this.prisma.mataKuliah.delete({
        where: { kodeMataKuliah: kodeMataKuliah },
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Mata Kuliah berhasil hapus',
        data: deleteMatakuliah,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Mata Kuliah tidak ditemukan',
          error: error.message,
        };
      }
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Gagal menghapus Mata Kuliah',
        error: error.message,
      };
    }
  }
}
