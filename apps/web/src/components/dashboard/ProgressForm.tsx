import { useState } from "react";
import toast from "react-hot-toast";
import { createProgress } from "@/services/progressService";

interface ProgressFormProps {
  onProgressCreated: () => void;
}

export default function ProgressForm({
  onProgressCreated,
}: ProgressFormProps) {
  const [bodyWeight, setBodyWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [biceps, setBiceps] = useState("");
  const [thighs, setThighs] = useState("");
  const [notes, setNotesValue] = useState("");
  const [loading, setLoading] = useState(false);

  function setNotes(value: string): void {
    setNotesValue(value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      await createProgress({
        date: new Date().toISOString(),
        bodyWeight: Number(bodyWeight),
        bodyFat: Number(bodyFat),
        chest: Number(chest),
        waist: Number(waist),
        hips: Number(hips),
        biceps: Number(biceps),
        thighs: Number(thighs),
        notes,
      });

      toast.success("Progress saved successfully!");

      setBodyWeight("");
      setBodyFat("");
      setChest("");
      setWaist("");
      setHips("");
      setBiceps("");
      setThighs("");
      setNotes("");

      onProgressCreated();
    } catch (err) {
      console.error(err);

      toast.error("Failed to save progress.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <h2 className="mb-6 text-2xl font-bold">
        Log Body Progress
      </h2>

      <div className="grid grid-cols-2 gap-5">
        <Input
          label="Body Weight (kg)"
          placeholder="75"
          value={bodyWeight}
          onChange={setBodyWeight}
          decimal
        />

        <Input
          label="Body Fat (%)"
          placeholder="18"
          value={bodyFat}
          onChange={setBodyFat}
          decimal
        />

        <Input
          label="Chest (cm)"
          placeholder="102"
          value={chest}
          onChange={setChest}
          decimal
        />

        <Input
          label="Waist (cm)"
          placeholder="82"
          value={waist}
          onChange={setWaist}
          decimal
        />

        <Input
          label="Hips (cm)"
          placeholder="95"
          value={hips}
          onChange={setHips}
          decimal
        />

        <Input
          label="Biceps (cm)"
          placeholder="38"
          value={biceps}
          onChange={setBiceps}
          decimal
        />

        <Input
          label="Thighs (cm)"
          placeholder="58"
          value={thighs}
          onChange={setThighs}
          decimal
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Notes
        </label>

        <textarea
          rows={4}
          placeholder="How was today's workout?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-cyan-500 py-3 text-lg font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
            Saving Progress...
          </div>
        ) : (
          "💾 Save Progress"
        )}
      </button>
    </form>
  );
}

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  decimal?: boolean;
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  decimal = false,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type="text"
        inputMode={decimal ? "decimal" : "numeric"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const val = e.target.value;

          const regex = decimal
            ? /^\d*\.?\d*$/
            : /^\d*$/;

          if (regex.test(val)) {
            onChange(val);
          }
        }}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
      />
    </div>
  );
}