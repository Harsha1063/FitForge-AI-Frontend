import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateNutritionDto {
  @IsDateString()
  date!: Date;

  @IsString()
  mealType!: string;

  @IsString()
  mealName!: string;

  @IsNumber()
  calories!: number;

  @IsOptional()
  @IsNumber()
  protein?: number;

  @IsOptional()
  @IsNumber()
  carbs?: number;

  @IsOptional()
  @IsNumber()
  fats?: number;

  @IsOptional()
  @IsNumber()
  water?: number;

  @IsOptional()
  @IsString()
  notes?: string;
}