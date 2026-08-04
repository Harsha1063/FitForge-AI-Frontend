import { Injectable } from '@nestjs/common';

@Injectable()
export class StrengthService {

  analyze(workouts: any[]) {

    const personalRecords: Record<string, number> = {};

    const frequency: Record<string, number> = {};

    let totalVolume = 0;

    let totalExercises = 0;

    for (const workout of workouts) {

      for (const exercise of workout.exercises) {

        totalExercises++;

        const volume =
          exercise.sets *
          exercise.reps *
          exercise.weight;

        totalVolume += volume;

        if (
          !personalRecords[exercise.exerciseName] ||
          exercise.weight >
            personalRecords[exercise.exerciseName]
        ) {
          personalRecords[exercise.exerciseName] =
            exercise.weight;
        }

        frequency[exercise.exerciseName] =
          (frequency[exercise.exerciseName] || 0) + 1;
      }
    }

    let favoriteExercise = '';

    let max = 0;

    Object.entries(frequency).forEach(([name, count]) => {
      if (count > max) {
        max = count;
        favoriteExercise = name;
      }
    });

    return {

      personalRecords,

      favoriteExercise,

      totalVolume,

      averageWorkoutVolume:
        workouts.length === 0
          ? 0
          : Math.round(totalVolume / workouts.length),

      totalWorkouts: workouts.length,

      totalExercises,
    };
  }
}