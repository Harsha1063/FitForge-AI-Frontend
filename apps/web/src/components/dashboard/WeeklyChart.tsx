import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

import { getWeeklyAnalytics } from "@/services/dashboardService";

interface WeeklyData {
  day: string;
  value: number;
}

export default function WeeklyChart() {
  const [data, setData] = useState<WeeklyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadChart() {
      try {
        const response = await getWeeklyAnalytics();

        console.log("========== WEEKLY ANALYTICS ==========");
console.log(response.chart);
        setData(response.chart);
      } catch (error) {
        console.error("Failed to load weekly analytics", error);
      } finally {
        setLoading(false);
      }
    }

    loadChart();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        Loading Weekly Chart...
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Weekly Progress
        </h2>

        <p className="text-sm text-slate-400">
          Workout completion
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <XAxis
              dataKey="day"
              tick={{ fill: "#94A3B8" }}
            />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              fill="#06B6D4"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}