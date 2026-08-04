import { Injectable } from '@nestjs/common';

@Injectable()
export class MetricsService {
  calculateProgress(progress: any[]) {
    if (!progress.length) {
      return {
        hasData: false,
      };
    }

    const sorted = [...progress].sort(
      (a, b) =>
        new Date(a.date).getTime() -
        new Date(b.date).getTime(),
    );

    const first = sorted[0];
    const last = sorted[sorted.length - 1];

    return {
      hasData: true,

      startWeight: first.bodyWeight,
      currentWeight: last.bodyWeight,
      weightChange:
        (last.bodyWeight ?? 0) -
        (first.bodyWeight ?? 0),

      bodyFatChange:
        (last.bodyFat ?? 0) -
        (first.bodyFat ?? 0),

      chestChange:
        (last.chest ?? 0) -
        (first.chest ?? 0),

      waistChange:
        (last.waist ?? 0) -
        (first.waist ?? 0),

      bicepsChange:
        (last.biceps ?? 0) -
        (first.biceps ?? 0),

      thighChange:
        (last.thighs ?? 0) -
        (first.thighs ?? 0),

      totalMeasurements: progress.length,
    };
  }

  calculateWorkout(workouts: any[]) {
    if (!workouts.length) {
      return {
        hasData: false,
      };
    }

    let totalExercises = 0;
    let totalSets = 0;
    let totalReps = 0;
    let totalVolume = 0;

    for (const workout of workouts) {
      for (const ex of workout.exercises) {
        totalExercises++;

        totalSets += ex.sets;

        totalReps += ex.sets * ex.reps;

        totalVolume +=
          ex.sets *
          ex.reps *
          ex.weight;
      }
    }

    return {
      hasData: true,

      totalWorkouts: workouts.length,

      totalExercises,

      totalSets,

      totalReps,

      trainingVolume: totalVolume,
    };
  }

  calculateNutrition(records: any[]) {
    if (!records.length) {
      return {
        hasData: false,
      };
    }

    const totals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fats: 0,
      water: 0,
    };

    for (const meal of records) {
      totals.calories += meal.calories ?? 0;
      totals.protein += meal.protein ?? 0;
      totals.carbs += meal.carbs ?? 0;
      totals.fats += meal.fats ?? 0;
      totals.water += meal.water ?? 0;
    }

    return {
      hasData: true,

      averageCalories:
        Math.round(
          totals.calories / records.length,
        ),

      averageProtein:
        Math.round(
          totals.protein / records.length,
        ),

      averageCarbs:
        Math.round(
          totals.carbs / records.length,
        ),

      averageFats:
        Math.round(
          totals.fats / records.length,
        ),

      averageWater:
        Math.round(
          totals.water / records.length,
        ),
    };
  }
}