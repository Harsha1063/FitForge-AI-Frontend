import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 65 },
  { day: "Thu", value: 52 },
  { day: "Fri", value: 80 },
  { day: "Sat", value: 92 },
  { day: "Sun", value: 70 },
];

export default function WeeklyChart() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Weekly Progress</h2>
        <p className="text-sm text-slate-400">
          Workout completion
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
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