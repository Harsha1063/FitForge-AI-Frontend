import FloatingCard from "@/components/ui/FloatingCard";
import MetricCard from "@/components/ui/MetricCard";


export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">
        {/* LEFT */}

        <div className="relative">
          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            🚀 AI Powered Fitness Platform
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">
            Build Your
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Dream Physique
            </span>

            <br />

            With AI
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Personalized workouts, AI meal plans, strength tracking,
            and intelligent coaching—all inside one platform.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-400">
              Start Free
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-cyan-400 hover:bg-slate-900">
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative h-[620px]">
          {/* Forge Score */}

          <FloatingCard className="absolute left-24 top-0 w-56">
            <MetricCard title="Forge Score™" value="91" />
          </FloatingCard>

          {/* Recovery */}

          <FloatingCard className="absolute right-0 top-12 w-48">
            <MetricCard title="Recovery" value="87%" />
          </FloatingCard>

          {/* Weekly Progress */}

          <FloatingCard className="absolute left-0 top-40 w-[420px]">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-semibold">Weekly Progress</p>

              <span className="text-cyan-400">82%</span>
            </div>

            <div className="flex h-32 items-end gap-3">
              {[20, 45, 35, 70, 60, 90, 82].map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className="flex-1 rounded-full bg-gradient-to-t from-cyan-500 to-blue-500"
                />
              ))}
            </div>
          </FloatingCard>

          {/* Protein */}

          <FloatingCard className="absolute bottom-24 right-10 w-52">
            <MetricCard title="Protein" value="156 g" />
          </FloatingCard>

          {/* AI Insight */}

          <FloatingCard className="absolute bottom-0 left-12 w-72">
            <p className="text-sm font-semibold text-cyan-400">
              🤖 AI Insight
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Recovery is excellent today. Increase your deadlift intensity by{" "}
              <span className="font-semibold text-white">5%</span> for optimal
              strength gains.
            </p>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}