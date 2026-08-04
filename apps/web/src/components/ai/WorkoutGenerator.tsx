import { useState } from "react";
import { generateWorkout } from "@/services/aiService";
import { toast } from "react-hot-toast";

interface Props {
  onGenerated: (data: any) => void;
}

export default function WorkoutGenerator({
  onGenerated,
}: Props) {
  const [goal, setGoal] = useState("Muscle Gain");
  const [experience, setExperience] =
    useState("Intermediate");
  const [equipment, setEquipment] =
    useState("Gym");

  const [daysPerWeek, setDaysPerWeek] =
    useState("5");

  const [loading, setLoading] =
    useState(false);

  async function handleGenerate() {
    if (!daysPerWeek) {
      toast.error("Please enter days per week.");
      return;
    }

    const days = Number(daysPerWeek);

    if (days < 1 || days > 7) {
      toast.error("Days per week must be between 1 and 7.");
      return;
    }

    try {
      setLoading(true);

      const result = await generateWorkout({
        goal,
        experience,
        equipment,
        daysPerWeek: days,
      });
onGenerated(result);
      if (!result.success) {
        toast.error(
  result.message ??
    "Unable to generate workout plan."
);
        return;
      }

      onGenerated(result.data);
      toast.success("Workout plan generated successfully!");
    } catch (err: any) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ??
          "Unable to connect to the AI service. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        💪 AI Workout Generator
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {/* Goal */}

        <div>
          <label className="mb-2 block">
            Goal
          </label>

          <select
            value={goal}
            onChange={(e) =>
              setGoal(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
          >
            <option>Muscle Gain</option>
            <option>Weight Loss</option>
            <option>Strength</option>
          </select>
        </div>

        {/* Experience */}

        <div>
          <label className="mb-2 block">
            Experience
          </label>

          <select
            value={experience}
            onChange={(e) =>
              setExperience(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Equipment */}

        <div>
          <label className="mb-2 block">
            Equipment
          </label>

          <select
            value={equipment}
            onChange={(e) =>
              setEquipment(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
          >
            <option>Gym</option>
            <option>Home</option>
            <option>Bodyweight</option>
          </select>
        </div>

        {/* Days */}

        <div>
          <label className="mb-2 block">
            Days Per Week
          </label>

          <input
            type="text"
            inputMode="numeric"
            placeholder="5"
            value={daysPerWeek}
            onChange={(e) => {
              const value = e.target.value;

              if (/^\d*$/.test(value)) {
                setDaysPerWeek(value);
              }
            }}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
          />
        </div>

      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
  <div className="flex items-center justify-center gap-2">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
    Generating Workout...
  </div>
) : (
  "💪 Generate Workout"
)}
      </button>

    </div>
  );
}