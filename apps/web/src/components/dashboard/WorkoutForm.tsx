import { useState } from "react";
import toast from "react-hot-toast";
import { createWorkout } from "@/services/workoutService";

interface Exercise {
  exerciseName: string;
  sets: number;
  reps: number;
  weight: number;
}

interface WorkoutFormProps {
  onWorkoutCreated: () => void;
}

export default function WorkoutForm({
  onWorkoutCreated,
}: WorkoutFormProps) {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("Monday");

  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);
  const [weight, setWeight] = useState(0);

  const [loading, setLoading] = useState(false);

  const [exercises, setExercises] = useState<Exercise[]>([]);

  function addExercise() {
    if (!exerciseName.trim()) return;

    setExercises((prev) => [
      ...prev,
      {
        exerciseName,
        sets,
        reps,
        weight,
      },
    ]);

    setExerciseName("");
    setSets(3);
    setReps(10);
    setWeight(0);
  }

  async function saveWorkout() {
    if (!title.trim()) {
      toast.error("Please enter a workout title.");
      return;
    }

    if (exercises.length === 0) {
      toast.error("Please add at least one exercise.");
      return;
    }

    try {
      setLoading(true);

      await createWorkout({
        title,
        day,
        exercises,
      });

      toast.success("Workout created successfully!");

      setTitle("");
      setDay("Monday");
      setExercises([]);

      onWorkoutCreated();
    } catch (err: any) {
      console.error(err);

      toast.error(
        err.response?.data?.message ??
          "Failed to create workout."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Create Workout
      </h2>

      {/* Workout Title */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Workout Title
        </label>

        <input
          type="text"
          placeholder="e.g. Push Day"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
        />
      </div>

      {/* Workout Day */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Workout Day
        </label>

        <select
          value={day}
          onChange={(e) =>
            setDay(e.target.value)
          }
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
        >
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
      </div>

      <h3 className="mb-5 text-lg font-bold">
        Add Exercise
      </h3>

      {/* Exercise Name */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Exercise Name
        </label>

        <input
          type="text"
          placeholder="e.g. Bench Press"
          value={exerciseName}
          onChange={(e) =>
            setExerciseName(e.target.value)
          }
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
        />
      </div>

      {/* Exercise Details */}
      <div className="mb-5 grid grid-cols-3 gap-5">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Sets
          </label>

          <input
            type="number"
            placeholder="4"
            value={sets}
            onChange={(e) =>
              setSets(Number(e.target.value))
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Reps
          </label>

          <input
            type="number"
            placeholder="10"
            value={reps}
            onChange={(e) =>
              setReps(Number(e.target.value))
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Weight (kg)
          </label>

          <input
            type="number"
            placeholder="60"
            value={weight}
            onChange={(e) =>
              setWeight(Number(e.target.value))
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
          />
        </div>

      </div>

      <button
        type="button"
        onClick={addExercise}
        className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
      >
        + Add Exercise
      </button>

      {exercises.length > 0 && (
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="mb-4 text-lg font-bold">
            Exercises Added
          </h3>

          <div className="space-y-3">
            {exercises.map((exercise, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-slate-900 p-4"
              >
                <div>
                  <h4 className="font-semibold">
                    {exercise.exerciseName}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {exercise.sets} Sets • {exercise.reps} Reps • {exercise.weight} kg
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={saveWorkout}
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-green-500 py-4 text-lg font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
  <div className="flex items-center justify-center gap-2">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
    Saving Workout...
  </div>
) : (
  "💾 Save Workout"
)}
      </button>
    </div>
  );
}