export default function NutritionCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-bold">
        Nutrition
      </h2>

      <div className="mt-6 space-y-6">
        <Progress
          title="Calories"
          value="2450 / 2800"
          width="87%"
        />

        <Progress
          title="Protein"
          value="156 / 180g"
          width="86%"
        />

        <Progress
          title="Water"
          value="3.2 / 4L"
          width="80%"
        />
      </div>
    </div>
  );
}

function Progress({
  title,
  value,
  width,
}: {
  title: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span>{title}</span>

        <span className="text-slate-400">
          {value}
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-800">
        <div
          className="h-3 rounded-full bg-cyan-500"
          style={{ width }}
        />
      </div>
    </div>
  );
}