import { Injectable } from '@nestjs/common';

@Injectable()
export class StreakService {
  calculate(workouts: any[]) {
    if (workouts.length === 0) {
      return {
        currentStreak: 0,
        longestStreak: 0,
        todayCompleted: false,
        achievements: [] as { icon: string; title: string }[],
      };
    }

    const dates = [
      ...new Set(
        workouts.map((w) =>
          new Date(w.createdAt).toDateString(),
        ),
      ),
    ]
      .map((d) => new Date(d))
      .sort((a, b) => a.getTime() - b.getTime());

    let longestStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < dates.length; i++) {
      const diff =
        (dates[i].getTime() - dates[i - 1].getTime()) /
        (1000 * 60 * 60 * 24);

      if (diff === 1) {
        currentStreak++;

        longestStreak = Math.max(
          longestStreak,
          currentStreak,
        );
      } else {
        currentStreak = 1;
      }
    }

    const todayCompleted = dates.some(
      (d) =>
        d.toDateString() ===
        new Date().toDateString(),
    );

    const achievements: {
      icon: string;
      title: string;
    }[] = [];

    if (workouts.length >= 1) {
      achievements.push({
        icon: '🥇',
        title: 'First Workout',
      });
    }

    if (workouts.length >= 10) {
      achievements.push({
        icon: '💯',
        title: '10 Workouts',
      });
    }

    if (workouts.length >= 25) {
      achievements.push({
        icon: '🔥',
        title: '25 Workouts',
      });
    }

    if (workouts.length >= 50) {
      achievements.push({
        icon: '🏋️',
        title: '50 Workouts',
      });
    }

    if (workouts.length >= 100) {
      achievements.push({
        icon: '👑',
        title: '100 Workouts',
      });
    }

    return {
      currentStreak,
      longestStreak,
      todayCompleted,
      achievements,
    };
  }
}