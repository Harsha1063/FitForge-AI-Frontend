import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  name!: string;

  @IsOptional()
  @IsNumber()
  age!: number;

  @IsOptional()
  @IsString()
  gender!: string;

  @IsOptional()
  @IsNumber()
  height!: number;

  @IsOptional()
  @IsNumber()
  weight!: number;

  @IsOptional()
  @IsString()
  goal!: string;

  @IsOptional()
  @IsString()
  fitnessLevel!: string;

  @IsOptional()
  @IsString()
  activityLevel!: string;

  @IsOptional()
  @IsNumber()
  targetWeight!: number;

  @IsOptional()
  @IsNumber()
  dailyCalories!: number;
}