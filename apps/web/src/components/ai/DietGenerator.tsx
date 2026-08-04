import { useState } from "react";
import toast from "react-hot-toast";
import { generateDiet } from "@/services/aiService";

interface Props {
  onGenerated: (data: any) => void;
}

export default function DietGenerator({
  onGenerated,
}: Props) {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [gender, setGender] = useState("Male");
  const [goal, setGoal] = useState("Muscle Gain");
  const [activityLevel, setActivityLevel] =
    useState("Moderately Active");

  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!age || !weight || !height) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const result = await generateDiet({
        age: Number(age),
        weight: Number(weight),
        height: Number(height),
        gender,
        goal,
        activityLevel,
      });
      onGenerated(result);

      if (!result.success) {
        toast.error(
          result.message ??
            "Unable to generate diet plan."
        );
        return;
      }

      toast.success("Diet plan generated successfully!");
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
        🥗 AI Diet Generator
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {/* Age */}

        <NumberInput
          label="Age"
          placeholder="22"
          value={age}
          onChange={setAge}
        />

        {/* Weight */}

        <NumberInput
          label="Weight (kg)"
          placeholder="70"
          value={weight}
          onChange={setWeight}
        />

        {/* Height */}

        <NumberInput
          label="Height (cm)"
          placeholder="175"
          value={height}
          onChange={setHeight}
        />

        {/* Gender */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Gender
          </label>

          <select
            value={gender}
            onChange={(e) =>
              setGender(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Goal */}

        <div>
          <label className="mb-2 block text-sm font-medium">
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
            <option>Maintenance</option>
          </select>
        </div>

        {/* Activity */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Activity Level
          </label>

          <select
            value={activityLevel}
            onChange={(e) =>
              setActivityLevel(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
          >
            <option>Sedentary</option>
            <option>Lightly Active</option>
            <option>Moderately Active</option>
            <option>Very Active</option>
            <option>Extremely Active</option>
          </select>
        </div>

      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-green-500 py-4 text-lg font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
  <div className="flex items-center justify-center gap-2">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
    Generating Diet Plan...
  </div>
) : (
  "🥗 Generate Diet Plan"
)}
      </button>

    </div>
  );
}

interface NumberInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function NumberInput({
  label,
  placeholder,
  value,
  onChange,
}: NumberInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        type="text"
        inputMode="numeric"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const val = e.target.value;

          if (/^\d*$/.test(val)) {
            onChange(val);
          }
        }}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
      />
    </div>
  );
}