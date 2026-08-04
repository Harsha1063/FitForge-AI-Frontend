import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

import { DashboardMetricsService } from './analytics/dashboard-metrics.service';
import { DashboardChartsService } from './analytics/dashboard-charts.service';

import { StrengthService } from './analytics/strength.service';
import { UsersModule } from '../users/users.module';

import { WeeklyAnalyticsService } from './analytics/weekly-analytics.service';
import { StreakService } from './analytics/streak.service';

import { MonthlyAnalyticsService } from './analytics/monthly-analytics.service';
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

  controllers: [DashboardController],

providers: [
  DashboardService,
  DashboardMetricsService,
  DashboardChartsService,
  StrengthService,
  StreakService,
  WeeklyAnalyticsService,
  MonthlyAnalyticsService,
],
})
export class DashboardModule {}