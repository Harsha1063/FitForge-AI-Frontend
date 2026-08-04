interface Props {
  workout: any;
}

export default function WorkoutResult({ workout }: Props) {
  if (!workout) return null;

  const program =
    workout.program_info ||
    workout.programInfo ||
    {};

  const days =
    workout.workout_plan ||
    workout.schedule ||
    [];

  return (
    <div className="space-y-10">

      {/* ================= HEADER ================= */}

      <div className="overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 p-8 shadow-2xl">

        <h1 className="text-4xl font-black text-cyan-400">
          💪 {program.title || "Workout Plan"}
        </h1>

        <p className="mt-4 max-w-4xl text-slate-300 leading-7">
          {program.description}
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-4">

          <InfoCard
            title="🎯 Goal"
            value={program.goal}
          />

          <InfoCard
            title="⭐ Experience"
            value={program.experience_level}
          />

          <InfoCard
            title="🏋 Equipment"
            value={program.equipment}
          />

          <InfoCard
            title="📅 Split"
            value={program.split}
          />

        </div>

      </div>

      {/* ================= WORKOUT DAYS ================= */}

      {days.map((day: any, index: number) => (

        <div
          key={index}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg"
        >

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

            <div>

              <h2 className="text-3xl font-black text-cyan-400">
                {day.day}
              </h2>

              <p className="mt-2 text-lg font-semibold text-slate-300">
                {day.muscle_group}
              </p>

            </div>

            <span className="rounded-full bg-cyan-500 px-5 py-2 font-bold text-black">
              {day.exercises?.length || 0} Exercises
            </span>

          </div>

          {/* Warmup */}

<div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
  <h3 className="mb-3 text-xl font-bold text-emerald-400">
    🔥 Warm Up
  </h3>

  {Array.isArray(day.warm_up) ? (
    <ul className="space-y-2">
      {day.warm_up.map((item: string, i: number) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  ) : typeof day.warm_up === "object" && day.warm_up !== null ? (
    <>
      {(day.warm_up as any).duration && (
        <p className="mb-3 font-semibold text-white">
          ⏱ {(day.warm_up as any).duration}
        </p>
      )}

      <ul className="space-y-2">
        {((day.warm_up as any).activities ?? []).map(
          (activity: string, i: number) => (
            <li key={i}>• {activity}</li>
          )
        )}
      </ul>
    </>
  ) : (
    <p className="text-slate-300">
      {day.warm_up}
    </p>
  )}
</div>
          {/* Exercise Cards Start */}

          <div className="mt-8 grid gap-5">
                        {day.exercises?.map(
              (
                exercise: any,
                i: number
              ) => (

                <div
                  key={i}
                  className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10"
                >

                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    <div className="flex items-start gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-2xl">
                        🏋
                      </div>

                      <div>

                        <h3 className="text-2xl font-bold text-white">
                          {exercise.name}
                        </h3>

                        <p className="mt-2 text-slate-400">
                          Exercise {i + 1}
                        </p>

                      </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                      <Badge
                        color="cyan"
                        label={`${exercise.sets} Sets`}
                      />

                      <Badge
                        color="emerald"
                        label={`${exercise.reps} Reps`}
                      />

                      <Badge
                        color="orange"
                        label={exercise.rest_time}
                      />

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

          {/* Cool Down */}

<div className="mt-8 rounded-2xl border border-purple-500/30 bg-purple-500/10 p-5">
  <h3 className="mb-3 text-xl font-bold text-purple-400">
    🧘 Cool Down
  </h3>

  {Array.isArray(day.cool_down) ? (
    <ul className="space-y-2">
      {day.cool_down.map((item: string, i: number) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  ) : typeof day.cool_down === "object" && day.cool_down !== null ? (
    <>
      {(day.cool_down as any).duration && (
        <p className="mb-3 font-semibold text-white">
          ⏱ {(day.cool_down as any).duration}
        </p>
      )}

      <ul className="space-y-2">
        {((day.cool_down as any).activities ?? []).map(
          (activity: string, i: number) => (
            <li key={i}>• {activity}</li>
          )
        )}
      </ul>
    </>
  ) : (
    <p className="text-slate-300">
      {day.cool_down}
    </p>
  )}
</div>
        </div>

      ))}

    </div>
  );
}
function InfoCard({
  title,
  value,
}: {
  title: string;
  value?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">

      <p className="text-sm uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <p className="mt-3 text-xl font-bold text-white">
        {value || "-"}
      </p>

    </div>
  );
}

function Badge({
  label,
  color,
}: {
  label: string;
  color: "cyan" | "emerald" | "orange";
}) {
  const styles = {
    cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    emerald:
      "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    orange:
      "bg-orange-500/20 text-orange-300 border-orange-500/30",
  };

  return (
    <span
      className={`rounded-full border px-4 py-2 text-sm font-bold ${styles[color]}`}
    >
      {label}
    </span>
  );
}