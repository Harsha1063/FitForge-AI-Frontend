import { Trash2 } from "lucide-react";
import { deleteWorkout } from "@/services/workoutService";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

interface ExerciseCardProps {
  id: string;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
  onDeleted: () => void;
}

export default function ExerciseCard({
  id,
  exercise,
  sets,
  reps,
  weight,
  onDeleted,
}: ExerciseCardProps) {
  async function handleDelete() {
    const result = await Swal.fire({
      title: "Delete Workout?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#06b6d4",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Delete",
      background: "#0f172a",
      color: "#ffffff",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteWorkout(id);

      toast.success("Workout deleted successfully!");

      onDeleted();
    } catch (err) {
      console.error(err);

      toast.error("Failed to delete workout.");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          {exercise}
        </h3>

        <button
          onClick={handleDelete}
          className="rounded-lg p-2 transition hover:bg-red-500/10"
        >
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