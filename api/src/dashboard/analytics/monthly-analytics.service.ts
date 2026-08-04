import { Injectable } from '@nestjs/common';

@Injectable()
export class MonthlyAnalyticsService {
  calculate(
    workouts: any[],
    nutrition: any[],
    progress: any[],
    fitnessScore: number,
  ) {
    const now = new Date();

    const monthAgo = new Date();
    monthAgo.setMonth(now.getMonth() - 1);

    const monthlyWorkouts = workouts.filter(
      w => new Date(w.createdAt) >= monthAgo,
    );

    const monthlyNutrition = nutrition.filter(
      n => new Date(n.date) >= monthAgo,
    );

    const monthlyProgress = progress.filter(
      p => new Date(p.date) >= monthAgo,
    );

    let volume = 0;
    let exercises = 0;

    monthlyWorkouts.forEach(workout => {
      workout.exercises.forEach(ex => {
        exercises++;

        volume +=
          ex.weight *
          ex.sets *
          ex.reps;
      });
    });

    const nutritionDays =
      monthlyNutrition.length || 1;

    const calories =
      monthlyNutrition.reduce(
        (s, m) => s + m.calories,
        0,
      ) / nutritionDays;

    const protein =
      monthlyNutrition.reduce(
        (s, m) => s + m.protein,
        0,
      ) / nutritionDays;

    const water =
      monthlyNutrition.reduce(
        (s, m) => s + m.water,
        0,
      ) / nutritionDays;

    let weightLost = 0;

    if (monthlyProgress.length >= 2) {
      weightLost =
        monthlyProgress[0].bodyWeight -
        monthlyProgress[
          monthlyProgress.length - 1
        ].bodyWeight;
    }

    return {
      month: now.toLocaleString('default', {
        month: 'long',
      }),

      workouts: monthlyWorkouts.length,

      exercises,

      trainingVolume: volume,

      averageCalories:
        Math.round(calories),

      averageProtein:
        Math.round(protein),

      averageWater:
        Number(water.toFixed(1)),

      weightLost,

      fitnessScore,
    };
  }
}