import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MatakuliahService } from './matakuliah.service';
import { CreateMataKuliahDto } from './dto/matakuliah.dto';

@Controller('matakuliah')
export class MatakuliahController {
  constructor(private mataKuliahService: MatakuliahService) {}
  @Post('/create-matakuliah')
  @HttpCode(HttpStatus.CREATED)
  async createMataKuliahControler(@Body() mataKuliahDtO: CreateMataKuliahDto) {
    return await this.mataKuliahService.CreateMatakuliah(mataKuliahDtO);
  }

  @Post('/matakuliah-all')
  @HttpCode(HttpStatus.CREATED)
  async findAllMatakuliah() {
    return this.mataKuliahService.FindAllMatakuliah();
  }
  @Post('/edit-matakuliah')
  @HttpCode(HttpStatus.CREATED)
  async EditMataKuliahController(@Body() data: CreateMataKuliahDto) {
    return this.mataKuliahService.EditMataKuliah(data);
  }

  @Patch('/edit/:kodeMataKuliah')
  @HttpCode(HttpStatus.OK) // Menggunakan HttpStatus.OK untuk operasi yang berhasil mengedit data
  async editMataKuliah(
    @Param('kodeMataKuliah') kodeMataKuliah: string, // Mengambil kode mata kuliah dari URL
    @Body() data: CreateMataKuliahDto, // Mengambil data edit dari body request
  ) {
    return this.mataKuliahService.EditKodeMataKuliah(kodeMataKuliah, data);
  }

  @Post('/delete-matakuliah')
  @HttpCode(HttpStatus.OK)
  async DeleteMatakuliahController(
    @Body('kodeMataKuliah') kodeMataKuliah: string,
  ) {
    return this.mataKuliahService.DeleteMatakuliahService(kodeMataKuliah);
  }
}
