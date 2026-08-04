import { IsEnum, IsInt, IsString, Max, Min } from 'class-validator';

export class GenerateWorkoutDto {
  @IsString()
  goal!: string;

  @IsString()
  experience!: string;

  @IsInt()
  @Min(2)
  @Max(7)
  daysPerWeek!: number;

  @IsString()
  equipment!: string;
}