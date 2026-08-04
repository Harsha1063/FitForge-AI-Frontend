import { useState } from "react";
import toast from "react-hot-toast";
import { createNutrition } from "@/services/nutritionService";

interface NutritionFormProps {
  onMealCreated: () => void;
}

export default function NutritionForm({
  onMealCreated,
}: NutritionFormProps) {
  const [mealType, setMealType] = useState("Breakfast");
  const [mealName, setMealName] = useState("");

  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [water, setWater] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  try {
    setLoading(true);

    await createNutrition({
      date: new Date().toISOString(),
      mealType,
      mealName,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fats: Number(fats),
      water: Number(water),
    });

    toast.success("Meal added successfully!");

    setMealName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
    setWater("");

    onMealCreated();
  } catch (err) {
    console.error(err);

    toast.error("Failed to add meal.");
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
        Add Meal
      </h2>

      {/* Meal Type */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Meal Type
        </label>

        <select
          value={mealType}
          onChange={(e) =>
            setMealType(e.target.value)
          }
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
        </select>
      </div>

      {/* Meal Name */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Meal Name
        </label>

        <input
          type="text"
          placeholder="e.g. Grilled Chicken Rice"
          value={mealName}
          onChange={(e) =>
            setMealName(e.target.value)
          }
          required
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
        />
      </div>

      {/* Nutrition Fields */}
      <div className="grid grid-cols-2 gap-5">

        {/* Calories */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Calories (kcal)
          </label>

          <input
            type="text"
            inputMode="numeric"
            placeholder="650"
            value={calories}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setCalories(value);
              }
            }}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
          />
        </div>

        {/* Protein */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Protein (g)
          </label>

          <input
            type="text"
            inputMode="numeric"
            placeholder="42"
            value={protein}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setProtein(value);
              }
            }}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
          />
        </div>

        {/* Carbs */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Carbohydrates (g)
          </label>

          <input
            type="text"
            inputMode="numeric"
            placeholder="58"
            value={carbs}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setCarbs(value);
              }
            }}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
          />
        </div>

        {/* Fats */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Fats (g)
          </label>

          <input
            type="text"
            inputMode="numeric"
            placeholder="18"
            value={fats}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setFats(value);
              }
            }}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
          />
        </div>

        {/* Water */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Water (Litres)
          </label>

          <input
            type="text"
            inputMode="decimal"
            placeholder="0.5"
            value={water}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*\.?\d*$/.test(value)) {
                setWater(value);
              }
            }}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
          />
        </div>

      </div>

      <button
  type="submit"
  disabled={loading}
  className="mt-8 w-full rounded-xl bg-cyan-500 py-3 text-lg font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? (
    <div className="flex items-center justify-center gap-2">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
      Saving Meal...
    </div>
  ) : (
    "💾 Save Meal"
  )}
</button>
    </form>
  );
}