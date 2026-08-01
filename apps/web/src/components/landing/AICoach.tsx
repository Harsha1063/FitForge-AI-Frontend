import { Bot, Sparkles, User } from "lucide-react";

export default function AICoach() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      {/* Background */}

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            AI Coach
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight">
            Your Personal Trainer
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Available 24/7
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Ask anything about workouts, nutrition, recovery, strength
            progression or body transformation. FitForge AI provides
            personalized answers based on your goals.
          </p>

          <div className="mt-12 space-y-5">
            {[
              "Personalized workout generation",
              "AI meal planning",
              "Recovery recommendations",
              "Weekly performance insights",
              "Strength progression tracking",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div className="rounded-full bg-cyan-500/10 p-2">
                  <Sparkles
                    className="text-cyan-400"
                    size={18}
                  />
                </div>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="rounded-[36px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl">
          {/* User */}

          <div className="flex justify-end">
            <div className="max-w-sm rounded-3xl rounded-br-lg bg-cyan-500 p-5 text-black">
              <div className="mb-3 flex items-center gap-2 font-semibold">
                <User size={18} />

                You
              </div>

              Create a 6-day powerlifting program focused on increasing
              my squat and deadlift.
            </div>
          </div>

          {/* AI */}

          <div className="mt-8 flex">
            <div className="max-w-md rounded-3xl rounded-bl-lg border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/10 p-2">
                  <Bot
                    size={20}
                    className="text-cyan-400"
                  />
                </div>

                <span className="font-bold">
                  FitForge AI
                </span>
              </div>

              <p className="leading-7 text-slate-300">
                Based on your previous training history and recovery
                score, here's your optimized weekly plan.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-900 p-5">
                <ul className="space-y-3 text-sm">
                  <li>🏋 Monday — Heavy Squat (5×5)</li>
                  <li>💪 Tuesday — Bench Strength</li>
                  <li>🔥 Wednesday — Recovery & Mobility</li>
                  <li>⚡ Thursday — Deadlift Focus</li>
                  <li>🏆 Friday — Accessories</li>
                  <li>🚀 Saturday — Volume Session</li>
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4">
                <p className="font-semibold text-cyan-400">
                  AI Recommendation
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Recovery is high today. Increase squat intensity by
                  5% and aim for 170g protein to maximize recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}