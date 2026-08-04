import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardMetricsService {
  calculateDashboard(
    profile: any,
    workouts: any[],
    nutrition: any[],
    progress: any[],
    fitnessScore: number,
  ) {
    const today = new Date().toDateString();

    const todayMeals = nutrition.filter(
      (n) => new Date(n.date).toDateString() === today,
    );

    const todayWorkout =
      workouts.find(
        (w) =>
          new Date(w.createdAt).toDateString() === today,
      ) != null;

    const calories = todayMeals.reduce(
      (sum, meal) => sum + meal.calories,
      0,
    );

    const protein = todayMeals.reduce(
      (sum, meal) => sum + meal.protein,
      0,
    );

    const water = todayMeals.reduce(
      (sum, meal) => sum + meal.water,
      0,
    );

    const latestWeight =
      progress.length > 0
        ? progress[0].bodyWeight
        : profile.weight;

    const goalProgress =
      profile.weight === profile.targetWeight
        ? 100
        : Math.max(
            0,
            Math.min(
              100,
              ((profile.weight - latestWeight) /
                (profile.weight -
                  profile.targetWeight)) *
                100,
            ),
          );

    return {
      fitnessScore,

      today: {
        calories,
        protein,
        water,
        workoutCompleted: todayWorkout,
      },

      latestWeight,

      goalProgress,

      workoutCount: workouts.length,

      nutritionLogs: nutrition.length,

      progressLogs: progress.length,

      recentWorkouts: workouts.slice(0, 5),

      recentMeals: nutrition.slice(0, 5),
    };
  }
}