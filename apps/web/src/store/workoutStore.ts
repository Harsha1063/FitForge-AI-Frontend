import { create } from "zustand";

export interface Workout {
  id: number;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
}

interface WorkoutState {
  workouts: Workout[];

  addWorkout: (workout: Omit<Workout, "id">) => void;
  removeWorkout: (id: number) => void;
}

export const useWorkoutStore = create<WorkoutState>((set) => ({
  workouts: [
    {
      id: 1,
      exercise: "Bench Press",
      sets: 5,
      reps: 5,
      weight: 100,
    },
  ],

  addWorkout: (workout) =>
    set((state) => ({
      workouts: [
        ...state.workouts,
        {
          id: Date.now(),
          ...workout,
        },
      ],
    })),

  removeWorkout: (id) =>
    set((state) => ({
      workouts: state.workouts.filter((w) => w.id !== id),
    })),
}));