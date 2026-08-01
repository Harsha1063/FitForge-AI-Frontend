import WorkoutForm from "@/components/dashboard/WorkoutForm";
import ExerciseCard from "@/components/dashboard/ExerciseCard";
import { useWorkoutStore } from "@/store/workoutStore";

export default function Workouts() {
  const workouts = useWorkoutStore((state) => state.workouts);

  return (
    <div>
      <h1 className="text-4xl font-black mb-8">Workouts</h1>

      <WorkoutForm />

      <div className="space-y-5">
        {workouts.map((workout) => (
          <ExerciseCard
            key={workout.id}
            {...workout}
          />
        ))}
      </div>
    </div>
  );
}