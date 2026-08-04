import { Injectable } from '@nestjs/common';

@Injectable()
export class FitnessScoreService {
  calculate(
    progress: any,
    workouts: any,
    nutrition: any,
  ) {
    let score = 0;

    // Workout Score (35)
    if (workouts.hasData) {
      score += Math.min(
        35,
        Math.floor(workouts.totalWorkouts * 2),
      );
    }

    // Nutrition Score (30)
    if (nutrition.hasData) {
      let nutritionScore = 0;

      if (nutrition.averageProtein >= 120)
        nutritionScore += 15;

      if (
        nutrition.averageCalories >= 1800 &&
        nutrition.averageCalories <= 2800
      )
        nutritionScore += 15;

      score += nutritionScore;
    }

    // Progress Score (25)
    if (progress.hasData) {
      let progressScore = 0;

      if (progress.weightChange !== 0)
        progressScore += 10;

      if (progress.bodyFatChange < 0)
        progressScore += 15;

      score += progressScore;
    }

    // Tracking Score (10)
    if (
      progress.hasData &&
      nutrition.hasData &&
      workouts.hasData
    ) {
      score += 10;
    }

    return Math.min(score, 100);
  }
}