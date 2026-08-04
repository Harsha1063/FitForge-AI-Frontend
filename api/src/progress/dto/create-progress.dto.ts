import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProgressDto {
  @IsDateString()
  date?: Date;

  @IsOptional()
  @IsNumber()
  bodyWeight?: number;

  @IsOptional()
  @IsNumber()
  bodyFat?: number;

  @IsOptional()
  @IsNumber()
  chest?: number;

  @IsOptional()
  @IsNumber()
  waist?: number;

  @IsOptional()
  @IsNumber()
  hips?: number;

  @IsOptional()
  @IsNumber()
  biceps?: number;

  @IsOptional()
  @IsNumber()
  thighs?: number;

  @IsOptional()
  @IsString()
  notes?: string;
}