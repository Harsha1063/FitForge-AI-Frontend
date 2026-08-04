import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardChartsService {
  getWeightChart(progress: any[]) {
    return progress
      .sort(
        (a, b) =>
          new Date(a.date).getTime() -
          new Date(b.date).getTime(),
      )
      .map((item) => ({
        date: item.date,
        weight: item.bodyWeight,
      }));
  }

  getCaloriesChart(nutrition: any[]) {
    return nutrition
      .sort(
        (a, b) =>
          new Date(a.date).getTime() -
          new Date(b.date).getTime(),
      )
      .map((item) => ({
        date: item.date,
        calories: item.calories,
      }));
  }

  getProteinChart(nutrition: any[]) {
    return nutrition
      .sort(
        (a, b) =>
          new Date(a.date).getTime() -
          new Date(b.date).getTime(),
      )
      .map((item) => ({
        date: item.date,
        protein: item.protein,
      }));
  }

  getWorkoutChart(workouts: any[]) {
    return workouts.map((item) => ({
      date: item.createdAt,
      exercises: item.exercises.length,
    }));
  }
}