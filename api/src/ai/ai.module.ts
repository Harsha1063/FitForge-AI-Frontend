import { Module } from '@nestjs/common';

import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { GroqService } from './groq.service';

import { MetricsService } from './analytics/metrics.service';

import { UsersModule } from '../users/users.module';
import { WorkoutsModule } from '../workouts/workouts.module';
import { ProgressModule } from '../progress/progress.module';
import { NutritionModule } from '../nutrition/nutrition.module';
import { FitnessScoreService } from './analytics/fitness-score.service';

@Module({
  imports: [
    UsersModule,
    WorkoutsModule,
    ProgressModule,
    NutritionModule,
  ],
  controllers: [AiController],
  providers: [
  AiService,
  GroqService,
  MetricsService,
  FitnessScoreService,
],
})
export class AiModule {}