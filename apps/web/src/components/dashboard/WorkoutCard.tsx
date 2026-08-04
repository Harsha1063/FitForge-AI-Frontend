import { useEffect, useState } from "react";
import { Dumbbell } from "lucide-react";
import { getWorkouts } from "@/services/workoutService";
import type { Workout } from "@/services/workoutService";

export default function WorkoutCard() {
  const [latestWorkout, setLatestWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkout() {
      try {
        const workouts = await getWorkouts();

        console.log("========== TODAY'S WORKOUT ==========");
        console.log(workouts);

        if (workouts.length > 0) {
          setLatestWorkout(workouts[0]);
        }
      } catch (error) {
        console.error("Failed to load workout", error);
      } finally {
        setLoading(false);
      }
    }

    loadWorkout();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">Today's Workout</h2>
        <p className="mt-4 text-slate-400">Loading...</p>
      </div>
    );
  }

  if (!latestWorkout) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">Today's Workout</h2>
        <p className="mt-4 text-slate-400">
          No workout created yet.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Today's Workout
        </h2>

        <p className="text-cyan-400 mt-2 font-semibold">
          {latestWorkout.title}
        </p>
      </div>

      <div className="space-y-4">
        {latestWorkout.exercises.map((exercise, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
          >
            <div className="flex items-center gap-3">
              <Dumbbell className="text-cyan-400" />

              <div>
                <p className="font-semibold">
                  {exercise.exerciseName}
                </p>

                <p className="text-sm text-slate-400">
                  {exercise.sets} Sets × {exercise.reps} Reps
                </p>
              </div>
            </div>

            <span className="font-bold text-cyan-400">
              {exercise.weight} kg
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}