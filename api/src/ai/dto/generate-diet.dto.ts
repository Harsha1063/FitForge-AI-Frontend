import { IsNumber, IsString } from 'class-validator';

export class GenerateDietDto {
  @IsNumber()
  age!: number;

  @IsNumber()
  weight!: number;

  @IsNumber()
  height!: number;

  @IsString()
  gender!: string;

  @IsString()
  goal!: string;

  @IsString()
  activityLevel!: string;
}