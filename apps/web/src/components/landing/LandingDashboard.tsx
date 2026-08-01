import type { ReactNode } from "react";
import {
  Activity,
  Dumbbell,
  Flame,
  Moon,
  Target,
  TrendingUp,
} from "lucide-react";

export default function LandingDashboard() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Product Preview
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Your Entire Fitness Journey
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              In One Dashboard
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Track workouts, nutrition, recovery and progress using one
            intelligent platform powered by AI.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mt-20 rounded-[36px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl">
          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-4">
            <StatCard
              icon={<Flame size={22} />}
              title="Calories"
              value="842"
              color="text-orange-400"
            />

            <StatCard
              icon={<Target size={22} />}
              title="Protein"
              value="156 g"
              color="text-green-400"
            />

            <StatCard
              icon={<Moon size={22} />}
              title="Sleep"
              value="8h 12m"
              color="text-violet-400"
            />

            <StatCard
              icon={<Activity size={22} />}
              title="Recovery"
              value="87%"
              color="text-cyan-400"
            />
          </div>

          {/* Main Grid */}
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Weekly Performance</h3>

                <TrendingUp className="text-cyan-400" />
              </div>

              <div className="mt-8 flex h-64 items-end gap-4">
                {[25, 48, 36, 72, 64, 92, 84].map((height) => (
                  <div
                    key={height}
                    style={{ height: `${height}%` }}
                    className="flex-1 rounded-full bg-gradient-to-t from-cyan-500 to-blue-500"
                  />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/10 p-3">🤖</div>

                <h3 className="text-xl font-bold">AI Coach</h3>
              </div>

              <div className="mt-8 space-y-5">
                <Insight
                  title="Recovery High"
                  text="Increase squat intensity by 5%."
                />

                <Insight
                  title="Protein Low"
                  text="Need 32g more protein today."
                />

                <Insight
                  title="Workout"
                  text="Pull workout recommended tomorrow."
                />
              </div>
            </div>
          </div>

          {/* Recent Workouts */}
          <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <h3 className="mb-6 text-xl font-bold">Recent Workouts</h3>

            {[
              ["Bench Press", "95 kg", "Completed"],
              ["Squat", "140 kg", "Completed"],
              ["Deadlift", "180 kg", "Pending"],
            ].map(([exercise, weight, status]) => (
              <div
                key={exercise}
                className="flex items-center justify-between border-b border-slate-800 py-4 last:border-none"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <Dumbbell size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">{exercise}</p>

                    <p className="text-sm text-slate-500">{weight}</p>
                  </div>
                </div>

                <span
                  className={
                    status === "Completed"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  title,
  value,
  color,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
      <div className={color}>{icon}</div>

      <p className="mt-4 text-sm text-slate-400">{title}</p>

      <h3 className="mt-2 text-3xl font-bold">{value}</h3>
    </div>
  );
}

function Insight({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-900 p-4">
      <p className="font-semibold text-cyan-400">{title}</p>

      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}