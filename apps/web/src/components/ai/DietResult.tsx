interface Props {
  diet: any;
}

export default function DietResult({ diet }: Props) {
  if (!diet) return null;

  const info = diet.response ?? diet;

  const summary = info.nutrition_summary ?? {};

  const meals = info.meal_plan ?? [];

  return (
    <div className="space-y-10">

      {/* HEADER */}

      <div className="overflow-hidden rounded-3xl border border-green-500/40 bg-gradient-to-br from-green-500/20 via-slate-900 to-slate-950 p-8 shadow-2xl">

        <h1 className="text-4xl font-black text-green-400">
          🥗 Personalized Diet Plan
        </h1>

        <p className="mt-3 text-slate-300">
          AI Generated Nutrition Plan
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-5">

          <MacroCard
            title="🔥 Calories"
            value={`${summary.daily_calories ?? "-"} kcal`}
          />

          <MacroCard
            title="🥩 Protein"
            value={summary.protein ?? "-"}
          />

          <MacroCard
            title="🍚 Carbs"
            value={summary.carbohydrates ?? "-"}
          />

          <MacroCard
            title="🥑 Fat"
            value={summary.fat ?? "-"}
          />

          <MacroCard
            title="💧 Water"
            value={summary.water_intake ?? "-"}
          />

        </div>
      </div>

      {/* MEALS */}

      <div className="space-y-6">

        {meals.map((meal: any, index: number) => (

          <div
            key={index}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
          >

            <h2 className="mb-6 text-2xl font-bold text-green-400">
              🍽️ {meal.meal}
            </h2>

            <div className="grid gap-4">

              {meal.foods?.map((food: string, i: number) => (

                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 transition hover:border-green-500"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-xl">
                    🍴
                  </div>

                  <p className="text-slate-200">
                    {food}
                  </p>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

function MacroCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10">

      <p className="text-sm uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <p className="mt-3 text-2xl font-black text-white">
        {value}
      </p>

    </div>
  );
}