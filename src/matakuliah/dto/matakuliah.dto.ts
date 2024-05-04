import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMataKuliahDto {
  @IsString()
  @IsNotEmpty()
  kodeMataKuliah: string;
  @IsString()
  @IsNotEmpty()
  matakuliah: string;
  @IsString()
  @IsNotEmpty()
  ruangan: string;
  @IsString()
  @IsNotEmpty()
  dosenPengampu: string;
}
