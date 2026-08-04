import {
  IsArray,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ExerciseDto {
  @IsString()
  exerciseName: string;

  @IsNumber()
  sets: number;

  @IsNumber()
  reps: number;

  @IsNumber()
  weight: number;
}

export class CreateWorkoutDto {
  @IsString()
  title: string;

  @IsString()
  day: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExerciseDto)
  exercises: ExerciseDto[];
}