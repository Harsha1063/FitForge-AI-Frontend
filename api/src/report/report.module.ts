import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { PdfService } from './pdf.service';

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

import { UsersModule } from '../users/users.module';

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
export class ReportModule {}