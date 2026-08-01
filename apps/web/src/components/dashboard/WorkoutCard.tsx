import { Dumbbell } from "lucide-react";

export default function WorkoutCard() {
  const workouts = [
    "Heavy Squat 5×5",
    "Bench Press 5×5",
    "Romanian Deadlift 4×10",
    "Leg Curl 3×15",
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold">
        Today's Workout
      </h2>

      <div className="mt-6 space-y-4">
        {workouts.map((workout) => (
          <div
            key={workout}
            className="flex items-center gap-4 rounded-xl bg-slate-800 p-4"
          >
            <Dumbbell className="text-cyan-400" />

            <span>{workout}</span>
          </div>
        ))}
      </div>
    </div>
  );
}