import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  getProfile,
  updateProfile,
} from "@/services/userService";

export default function Settings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: 18,
    gender: "Male",
    height: 170,
    weight: 70,
    targetWeight: 70,
    goal: "Muscle Gain",
    fitnessLevel: "Beginner",
    activityLevel: "Moderately Active",
    dailyCalories: 2200,
  });

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const user = await getProfile();

      setForm({
        name: user.name ?? "",
        email: user.email ?? "",
        age: user.age ?? 18,
        gender: user.gender ?? "Male",
        height: user.height ?? 170,
        weight: user.weight ?? 70,
        targetWeight: user.targetWeight ?? 70,
        goal: user.goal ?? "Muscle Gain",
        fitnessLevel: user.fitnessLevel ?? "Beginner",
        activityLevel:
          user.activityLevel ?? "Moderately Active",
        dailyCalories:
          user.dailyCalories ?? 2200,
      });
    } catch (err) {
      console.error(err);
      toast.error("Unable to load profile.");
    } finally {
      setLoading(false);
    }
  }

  function updateField(
    key: string,
    value: string | number
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function handleSave() {
    try {
      setSaving(true);

      await updateProfile({
        name: form.name,
        age: form.age,
        gender: form.gender,
        height: form.height,
        weight: form.weight,
        targetWeight: form.targetWeight,
        goal: form.goal,
        fitnessLevel: form.fitnessLevel,
        activityLevel: form.activityLevel,
        dailyCalories: form.dailyCalories,
      });

      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-black">
          ⚙️ Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your fitness profile.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="mb-6 text-2xl font-bold">
          👤 Personal Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <Input
            label="Full Name"
            value={form.name}
            onChange={(v: string) =>
              updateField("name", v)
            }
          />

          <Input
            label="Email"
            value={form.email}
            disabled
            onChange={() => {}}
          />

          <NumberInput
            label="Age"
            value={form.age}
            onChange={(v: number) => updateField("age", v)}
          />

          <Select
            label="Gender"
            value={form.gender}
            options={[
              "Male",
              "Female",
            ]}
            onChange={(v: string) =>
              updateField("gender", v)
            }
          />

          <NumberInput
            label="Height (cm)"
            value={form.height}
            onChange={(v: number) =>
              updateField("height", v)
            }
          />

          <NumberInput
            label="Weight (kg)"
            value={form.weight}
            onChange={(v: number) =>
              updateField("weight", v)
            }
          />

          <NumberInput
            label="Target Weight (kg)"
            value={form.targetWeight}
            onChange={(v: number) =>
              updateField("targetWeight", v)
            }
          />

          <NumberInput
            label="Daily Calories"
            value={form.dailyCalories}
            onChange={(v: number) =>
              updateField("dailyCalories", v)
            }
          />

          <Select
            label="Goal"
            value={form.goal}
            options={[
              "Muscle Gain",
              "Weight Loss",
              "Maintenance",
            ]}
            onChange={(v: string) =>
              updateField("goal", v)
            }
          />

          <Select
            label="Fitness Level"
            value={form.fitnessLevel}
            options={[
              "Beginner",
              "Intermediate",
              "Advanced",
            ]}
            onChange={(v: string) =>
              updateField(
                "fitnessLevel",
                v
              )
            }
          />

          <Select
            label="Activity Level"
            value={form.activityLevel}
            options={[
              "Sedentary",
              "Lightly Active",
              "Moderately Active",
              "Very Active",
              "Extremely Active",
            ]}
            onChange={(v: string) =>
              updateField(
                "activityLevel",
                v
              )
            }
          />

        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="mt-8 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400 disabled:opacity-60"
        >
          {saving ? (
  <div className="flex items-center justify-center gap-2">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
    Saving...
  </div>
) : (
  "💾 Save Changes"
)}
        </button>

      </div>

    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  disabled = false,
}: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        value={value}
        disabled={disabled}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
      />
    </div>
  );
}

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function NumberInput({
  label,
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
        value={value}
        onChange={(e) => {
          const v = e.target.value;

          if (/^\d*$/.test(v)) {
            onChange(v === "" ? 0 : Number(v));
          }
        }}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
      />
    </div>
  );
}

interface SelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function Select({
  label,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}