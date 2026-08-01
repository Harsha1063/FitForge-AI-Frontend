import { useState } from "react";
import { useWorkoutStore } from "@/store/workoutStore";

export default function WorkoutForm() {
  const addWorkout = useWorkoutStore((state) => state.addWorkout);

  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);
  const [weight, setWeight] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!exercise.trim()) return;

    addWorkout({
      exercise,
      sets,
      reps,
      weight,
    });

    setExercise("");
    setSets(3);
    setReps(10);
    setWeight(0);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <input
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Exercise Name"
        className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
      />

      <div className="grid grid-cols-3 gap-4">
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(Number(e.target.value))}
          className="rounded-lg border border-slate-700 bg-slate-950 p-3"
        />

        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
          className="rounded-lg border border-slate-700 bg-slate-950 p-3"
        />

        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="rounded-lg border border-slate-700 bg-slate-950 p-3"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-cyan-500 px-5 py-3 font-bold text-black"
      >
        Add Exercise
      </button>
    </form>
  );
}