import { useEffect, useState } from "react";
import WorkoutForm from "@/components/dashboard/WorkoutForm";
import ExerciseCard from "@/components/dashboard/ExerciseCard";
import { getWorkouts } from "@/services/workoutService";
import type { Workout } from "@/services/workoutService";

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadWorkouts() {
    try {
      const data = await getWorkouts();
      setWorkouts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadWorkouts();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div>

      <h1 className="mb-8 text-4xl font-black">
        Workouts
      </h1>

      <WorkoutForm onWorkoutCreated={loadWorkouts} />

      {workouts.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
          No workouts yet.
        </div>
      ) : (
        <div className="space-y-6">
          {workouts.map((workout) => (
            <div
              key={workout._id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-xl font-bold">
                {workout.title}
              </h2>

              <p className="mb-5 text-slate-400">
                {workout.day}
              </p>

              {workout.exercises.map((exercise, index) => (
                <ExerciseCard
    key={index}
    id={workout._id}
    exercise={exercise.exerciseName}
    sets={exercise.sets}
    reps={exercise.reps}
    weight={exercise.weight}
    onDeleted={loadWorkouts}
/>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}