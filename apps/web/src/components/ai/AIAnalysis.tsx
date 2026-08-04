import { useState } from "react";
import toast from "react-hot-toast";
import { analyzeFitness } from "@/services/aiService";

export default function AIAnalysis() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function loadAnalysis() {
    try {
      setLoading(true);

      const result = await analyzeFitness();

      if (!result.success) {
        toast.error(
  result.message ??
    "Unable to analyze fitness."
);
        return;
      }

      setAnalysis(result);
      toast.success("Fitness analysis completed!");
    } catch (err: any) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ??
          "Unable to contact AI service."
      );
    } finally {
      setLoading(false);
    }
  }

  const score =
    analysis?.fitnessScore ?? 0;

  const status =
    score >= 85
      ? "Excellent"
      : score >= 70
      ? "Good"
      : score >= 50
      ? "Average"
      : "Needs Improvement";

  return (
    <div className="space-y-8">

      {/* Analyze Button */}

      <button
        onClick={loadAnalysis}
        disabled={loading}
        className="w-full rounded-2xl bg-orange-500 py-5 text-xl font-black text-black transition hover:bg-orange-400 disabled:opacity-60"
      >
        {loading
          ? "Analyzing..."
          : "📊 Analyze My Fitness"}
      </button>

      {analysis && (

        <>

          {/* ================= HERO ================= */}
{loading ? (
  <div className="flex items-center justify-center gap-2">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
    Analyzing...
  </div>
) : (
  "📊 Analyze My Fitness"
)}
          <div className="overflow-hidden rounded-3xl border border-orange-500/40 bg-gradient-to-br from-orange-500/20 via-slate-900 to-slate-950 p-10 shadow-2xl">

            <div className="flex flex-col items-center">

              <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-orange-500 bg-slate-950 shadow-lg">

                <div className="text-center">

                  <p className="text-6xl font-black text-orange-400">
                    {score}
                  </p>

                  <p className="mt-2 text-sm uppercase tracking-widest text-slate-400">
                    Score
                  </p>

                </div>

              </div>

              <h2 className="mt-8 text-4xl font-black text-orange-400">
                🏆 Fitness Score
              </h2>

              <p className="mt-3 text-xl font-semibold text-white">
                {status}
              </p>

              <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-slate-800">

                <div
                  className="h-full rounded-full bg-orange-500 transition-all duration-700"
                  style={{
                    width: `${score}%`,
                  }}
                />

              </div>

            </div>

          </div>

          {/* ================= QUICK STATS ================= */}

          <div className="grid gap-5 md:grid-cols-3">

            <StatCard
              title="🎯 Goal"
              value={
                analysis.metrics.profile.goal
              }
            />

            <StatCard
              title="⚡ Activity"
              value={
                analysis.metrics.profile
                  .activityLevel
              }
            />

            <StatCard
              title="🏋 Fitness"
              value={
                analysis.metrics.profile
                  .fitnessLevel
              }
            />

          </div>
                    {/* ================= SUMMARY ================= */}

          {analysis.analysis?.summary && (
            <InfoCard
              title="📖 AI Summary"
              color="orange"
              content={analysis.analysis.summary}
            />
          )}

          {/* ================= ADVICE GRID ================= */}

          <div className="grid gap-6 lg:grid-cols-2">

            <ListCard
              title="💪 Strengths"
              color="green"
              items={analysis.analysis?.strengths}
            />

            <ListCard
              title="⚠️ Improvements"
              color="red"
              items={analysis.analysis?.improvements}
            />

            <ListCard
              title="🥗 Nutrition Advice"
              color="emerald"
              items={analysis.analysis?.nutritionAdvice}
            />

            <ListCard
              title="🏋 Workout Advice"
              color="cyan"
              items={analysis.analysis?.workoutAdvice}
            />

            <ListCard
              title="😴 Recovery Advice"
              color="purple"
              items={analysis.analysis?.recoveryAdvice}
            />

            {analysis.analysis?.nextGoal && (
              <InfoCard
                title="🎯 Next Goal"
                color="yellow"
                content={analysis.analysis.nextGoal}
              />
            )}

          </div>

          {/* ================= MOTIVATION ================= */}

          {analysis.analysis?.motivation && (

            <div className="rounded-3xl border border-pink-500/30 bg-gradient-to-r from-pink-500/10 to-orange-500/10 p-8">

              <h2 className="mb-5 text-3xl font-black text-pink-400">
                🔥 Daily Motivation
              </h2>

              <p className="text-lg leading-8 text-slate-200">
                {analysis.analysis.motivation}
              </p>

            </div>

          )}

        </>

      )}

    </div>
  );
}
function StatCard({
  title,
  value,
}: {
  title: string;
  value?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10">

      <p className="text-sm uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <p className="mt-3 text-2xl font-black text-white">
        {value || "-"}
      </p>

    </div>
  );
}

function InfoCard({
  title,
  content,
  color,
}: {
  title: string;
  content: string;
  color:
    | "orange"
    | "yellow"
    | "green"
    | "red"
    | "cyan"
    | "purple"
    | "emerald";
}) {
  const colors = {
    orange:
      "border-orange-500/30 text-orange-400 bg-orange-500/10",
    yellow:
      "border-yellow-500/30 text-yellow-400 bg-yellow-500/10",
    green:
      "border-green-500/30 text-green-400 bg-green-500/10",
    red:
      "border-red-500/30 text-red-400 bg-red-500/10",
    cyan:
      "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    purple:
      "border-purple-500/30 text-purple-400 bg-purple-500/10",
    emerald:
      "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
  };

  return (
    <div
      className={`rounded-3xl border p-7 ${colors[color]}`}
    >
      <h2 className="mb-5 text-2xl font-black">
        {title}
      </h2>

      <p className="leading-8 text-slate-200">
        {content}
      </p>
    </div>
  );
}

function ListCard({
  title,
  items,
  color,
}: {
  title: string;
  items?: string[];
  color:
    | "green"
    | "red"
    | "cyan"
    | "purple"
    | "emerald";
}) {
  if (!items?.length) return null;

  const colors = {
    green:
      "border-green-500/30 text-green-400",
    red:
      "border-red-500/30 text-red-400",
    cyan:
      "border-cyan-500/30 text-cyan-400",
    purple:
      "border-purple-500/30 text-purple-400",
    emerald:
      "border-emerald-500/30 text-emerald-400",
  };

  return (
    <div
      className={`rounded-3xl border bg-slate-900 p-7 ${colors[color]}`}
    >
      <h2 className="mb-6 text-2xl font-black">
        {title}
      </h2>

      <div className="space-y-4">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl bg-slate-950 p-4"
          >
            <div className="mt-1 h-3 w-3 rounded-full bg-current" />

            <p className="leading-7 text-slate-200">
              {item}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}