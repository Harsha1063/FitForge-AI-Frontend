import { Trash2 } from "lucide-react";
import { useWorkoutStore } from "@/store/workoutStore";

interface ExerciseCardProps {
  id: number;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
}

export default function ExerciseCard({
  id,
  exercise,
  sets,
  reps,
  weight,
}: ExerciseCardProps) {
  const removeWorkout = useWorkoutStore((state) => state.removeWorkout);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{exercise}</h3>

        <button onClick={() => removeWorkout(id)}>
          <Trash2 className="h-5 w-5 text-red-400" />
        </button>
      </div>

      <div className="mt-4 flex justify-between text-slate-400">
        <span>{sets} Sets</span>
        <span>{reps} Reps</span>
        <span>{weight} kg</span>
      </div>
    </div>
  );
}