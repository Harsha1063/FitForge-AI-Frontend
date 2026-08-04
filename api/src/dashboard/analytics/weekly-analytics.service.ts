import { Injectable } from '@nestjs/common';

@Injectable()
export class WeeklyAnalyticsService {
  calculate(
    workouts: any[],
    nutrition: any[],
    progress: any[],
    fitnessScore: number,
  ) {
    const now = new Date();

    const weekAgo = new Date();
    weekAgo.setDate(now.getDate() - 6);

    const weeklyWorkouts = workouts.filter(
      (w) => new Date(w.createdAt) >= weekAgo,
    );

    const weeklyNutrition = nutrition.filter(
      (n) => new Date(n.date) >= weekAgo,
    );

    const weeklyProgress = progress.filter(
      (p) => new Date(p.date) >= weekAgo,
    );

    // -------------------------
    // Weekly Chart
    // -------------------------

    const days = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ];

    const chart = days.map((day) => ({
      day,
      value: 0,
    }));

    weeklyWorkouts.forEach((workout) => {
      const index = new Date(
        workout.createdAt,
      ).getDay();

      chart[index].value += 1;
    });

    // -------------------------
    // Workout Stats
    // -------------------------

    const totalWorkouts =
      weeklyWorkouts.length;

    let trainingVolume = 0;
    let totalExercises = 0;

    weeklyWorkouts.forEach((workout) => {
      workout.exercises.forEach((exercise) => {
        totalExercises++;

        trainingVolume +=
          exercise.weight *
          exercise.sets *
          exercise.reps;
      });
    });

    // -------------------------
    // Nutrition
    // -------------------------

    const nutritionDays =
      weeklyNutrition.length || 1;

    const avgCalories =
      weeklyNutrition.reduce(
        (sum, meal) => sum + meal.calories,
        0,
      ) / nutritionDays;

    const avgProtein =
      weeklyNutrition.reduce(
        (sum, meal) => sum + meal.protein,
        0,
      ) / nutritionDays;

    const avgWater =
      weeklyNutrition.reduce(
        (sum, meal) => sum + meal.water,
        0,
      ) / nutritionDays;

    // -------------------------
    // Weight
    // -------------------------

    let weightChange = 0;

    if (weeklyProgress.length >= 2) {
      weightChange =
        weeklyProgress[
          weeklyProgress.length - 1
        ].bodyWeight -
        weeklyProgress[0].bodyWeight;
    }

    return {
      chart,

      summary: {
        weekStart: weekAgo,

        weekEnd: now,

        workouts: totalWorkouts,

        exercises: totalExercises,

        trainingVolume,

        averageCalories:
          Math.round(avgCalories),

        averageProtein:
          Math.round(avgProtein),

        averageWater:
          Number(avgWater.toFixed(1)),

        weightChange,

        fitnessScore,
      },
    };
  }
}