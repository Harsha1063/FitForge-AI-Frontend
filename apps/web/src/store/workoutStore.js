import { create } from "zustand";
export const useWorkoutStore = create((set) => ({
    workouts: [
        {
            id: 1,
            exercise: "Bench Press",
            sets: 5,
            reps: 5,
            weight: 100,
        },
    ],
    addWorkout: (workout) => set((state) => ({
        workouts: [
            ...state.workouts,
            {
                id: Date.now(),
                ...workout,
            },
        ],
    })),
    removeWorkout: (id) => set((state) => ({
        workouts: state.workouts.filter((w) => w.id !== id),
    })),
}));
