import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSmartGardenDto {
  @IsNumber()
  @IsNotEmpty()
  suhu: number;
  @IsNumber()
  @IsNotEmpty()
  kelembaban: number;
}
