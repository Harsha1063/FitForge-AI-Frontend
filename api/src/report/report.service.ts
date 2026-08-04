import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReportController } from './report.controller';

import { PdfService } from './pdf.service';

import { UsersModule } from '../users/users.module';

import {
  Workout,
  WorkoutSchema,
} from '../workouts/schemas/workout';

import {
  Progress,
  ProgressSchema,
} from '../progress/schemas/progress';

import {
  Nutrition,
  NutritionSchema,
} from '../nutrition/schemas/nutrition';

@Module({
  imports: [
    UsersModule,

    MongooseModule.forFeature([
      {
        name: Workout.name,
        schema: WorkoutSchema,
      },
      {
        name: Progress.name,
        schema: ProgressSchema,
      },
      {
        name: Nutrition.name,
        schema: NutritionSchema,
      },
    ]),
  ],

  controllers: [ReportController],

  providers: [
    ReportService,
    PdfService,
  ],
})
export class ReportService {}