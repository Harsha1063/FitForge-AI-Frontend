import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { WeeklyAnalyticsService } from './analytics/weekly-analytics.service';
import { MonthlyAnalyticsService } from './analytics/monthly-analytics.service';
import { DashboardMetricsService } from './analytics/dashboard-metrics.service';
import { DashboardChartsService } from './analytics/dashboard-charts.service';
import { StrengthService } from './analytics/strength.service';
import { StreakService } from './analytics/streak.service';

import { UsersService } from '../users/users.service';

import {
  Workout,
  WorkoutDocument,
} from '../workouts/schemas/workout';

import {
  Progress,
  ProgressDocument,
} from '../progress/schemas/progress';

import {
  Nutrition,
  NutritionDocument,
} from '../nutrition/schemas/nutrition';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Workout.name)
    private readonly workoutModel: Model<WorkoutDocument>,

    @InjectModel(Progress.name)
    private readonly progressModel: Model<ProgressDocument>,

    @InjectModel(Nutrition.name)
    private readonly nutritionModel: Model<NutritionDocument>,

    private readonly dashboardMetricsService: DashboardMetricsService,
    private readonly dashboardChartsService: DashboardChartsService,
    private readonly strengthService: StrengthService,
    private readonly streakService: StreakService,
    private readonly weeklyAnalyticsService: WeeklyAnalyticsService,
    private readonly monthlyAnalyticsService: MonthlyAnalyticsService,
    private readonly usersService: UsersService,
  ) {}

  async getDashboard(userId: string) {
    console.log('\n========== DASHBOARD ==========');
    console.log('Requested User ID:', userId);

    const workouts = await this.workoutModel
      .find({ userId })
      .sort({ createdAt: -1 });

    console.log('Workout Count:', workouts.length);
    console.log('Workouts:', workouts);

    const progress = await this.progressModel
      .find({ userId })
      .sort({ date: -1 });

    console.log('Progress Count:', progress.length);

    const nutrition = await this.nutritionModel
      .find({ userId })
      .sort({ date: -1 });

    console.log('Nutrition Count:', nutrition.length);

    const user = await this.usersService.getProfile(userId);

    console.log('User Profile:', user);

    const profile = {
      weight:
        progress.length > 0
          ? progress[0].bodyWeight
          : user.weight,

      targetWeight: user.targetWeight,
    };

    const fitnessScore =
      workouts.length * 10 +
      progress.length * 15 +
      nutrition.length * 5;

    console.log('Fitness Score:', fitnessScore);
    console.log('===============================\n');

    return this.dashboardMetricsService.calculateDashboard(
      profile,
      workouts,
      nutrition,
      progress,
      fitnessScore,
    );
  }

  async getCharts(userId: string) {
    const workouts = await this.workoutModel
      .find({ userId })
      .sort({ createdAt: 1 });

    const progress = await this.progressModel
      .find({ userId })
      .sort({ date: 1 });

    const nutrition = await this.nutritionModel
      .find({ userId })
      .sort({ date: 1 });

    return {
      weight:
        this.dashboardChartsService.getWeightChart(progress),

      calories:
        this.dashboardChartsService.getCaloriesChart(nutrition),

      protein:
        this.dashboardChartsService.getProteinChart(nutrition),

      workouts:
        this.dashboardChartsService.getWorkoutChart(workouts),
    };
  }

  async getStrength(userId: string) {
    const workouts = await this.workoutModel
      .find({ userId })
      .sort({ createdAt: -1 });

    return this.strengthService.analyze(workouts);
  }

  async getStreak(userId: string) {
    const workouts = await this.workoutModel
      .find({ userId })
      .sort({ createdAt: 1 });

    return this.streakService.calculate(workouts);
  }

  async getWeeklyAnalytics(userId: string) {
    const workouts = await this.workoutModel
      .find({ userId })
      .sort({ createdAt: 1 });

    const progress = await this.progressModel
      .find({ userId })
      .sort({ date: 1 });

    const nutrition = await this.nutritionModel
      .find({ userId })
      .sort({ date: 1 });

    const fitnessScore =
      workouts.length * 10 +
      progress.length * 15 +
      nutrition.length * 5;

    return this.weeklyAnalyticsService.calculate(
      workouts,
      nutrition,
      progress,
      fitnessScore,
    );
  }

  async getMonthlyAnalytics(userId: string) {
    const workouts = await this.workoutModel
      .find({ userId })
      .sort({ createdAt: 1 });

    const progress = await this.progressModel
      .find({ userId })
      .sort({ date: 1 });

    const nutrition = await this.nutritionModel
      .find({ userId })
      .sort({ date: 1 });

    const fitnessScore =
      workouts.length * 10 +
      progress.length * 15 +
      nutrition.length * 5;

    return this.monthlyAnalyticsService.calculate(
      workouts,
      nutrition,
      progress,
      fitnessScore,
    );
  }
}