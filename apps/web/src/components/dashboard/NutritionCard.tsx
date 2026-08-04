import { useEffect, useState } from "react";
import { getDashboard } from "@/services/dashboardService";

interface DashboardData {
  nutritionLogs: number;

  today: {
    calories: number;
    protein: number;
    water: number;
  };
}

export default function NutritionCard() {
  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getDashboard();

        console.log("========== NUTRITION CARD ==========");
        console.log(data);

        setDashboard(data);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  if (!dashboard) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        Loading Nutrition...
      </div>
    );
  }

  const calorieGoal = 2800;
  const proteinGoal = 180;
  const waterGoal = 4;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold">
        Nutrition
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Meals Logged Today: {dashboard.nutritionLogs}
      </p>

      <div className="mt-6 space-y-6">

        <Progress
          title="Calories"
          current={dashboard.today.calories}
          goal={calorieGoal}
          unit="kcal"
        />

        <Progress
          title="Protein"
          current={dashboard.today.protein}
          goal={proteinGoal}
          unit="g"
        />

        <Progress
          title="Water"
          current={dashboard.today.water}
          goal={waterGoal}
          unit="L"
        />

      </div>
    </div>
  );
}

function Progress({
  title,
  current,
  goal,
  unit,
}: {
  title: string;
  current: number;
  goal: number;
  unit: string;
}) {
  const percentage = Math.min(
    (current / goal) * 100,
    100
  );

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span>{title}</span>

        <span className="text-slate-400">
          {current} / {goal} {unit}
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-800">
        <div
          className="h-3 rounded-full bg-cyan-500 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}