import { useEffect, useState } from "react";
import NutritionForm from "@/components/dashboard/NutritionForm";
import {
  getNutrition,
  deleteNutrition,
} from "@/services/nutritionService";
import type { Nutrition } from "@/services/nutritionService";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function Nutrition() {
  const [meals, setMeals] = useState<Nutrition[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadMeals() {
    try {
      const data = await getNutrition();
      setMeals(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load meals.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMeals();
  }, []);

  async function handleDelete(id: string) {
    const result = await Swal.fire({
      title: "Delete Meal?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#06b6d4",
      cancelButtonColor: "#ef4444",
      background: "#0f172a",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteNutrition(id);

      toast.success("Meal deleted successfully!");

      loadMeals();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete meal.");
    }
  }

  if (loading) {
    return (
      <div className="flex h-60 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-8 text-4xl font-black">
        Nutrition
      </h1>

      <NutritionForm onMealCreated={loadMeals} />

      {meals.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
          No meals logged.
        </div>
      ) : (
        <div className="space-y-5">
          {meals.map((meal) => (
            <div
              key={meal._id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    {meal.mealName}
                  </h2>

                  <p className="text-slate-400">
                    {meal.mealType}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(meal._id)}
                  className="rounded-lg p-2 transition hover:bg-red-500/10"
                >
                  <Trash2 className="text-red-400" />
                </button>
              </div>

              <div className="mt-5 grid grid-cols-5 gap-4 text-center">
                <Info label="Calories" value={meal.calories} />
                <Info label="Protein" value={`${meal.protein} g`} />
                <Info label="Carbs" value={`${meal.carbs} g`} />
                <Info label="Fats" value={`${meal.fats} g`} />
                <Info label="Water" value={`${meal.water} L`} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div>
      <p className="text-slate-400">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}