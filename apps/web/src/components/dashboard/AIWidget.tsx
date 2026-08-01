import { Bot } from "lucide-react";

export default function AIWidget() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <Bot className="text-cyan-400" />

        <h2 className="text-xl font-bold">
          AI Coach
        </h2>
      </div>

      <div className="mt-6 space-y-5">
        <div className="rounded-xl bg-slate-800 p-4">
          <h4 className="font-semibold text-cyan-400">
            Recovery
          </h4>

          <p className="mt-2 text-sm text-slate-400">
            Excellent. Increase squat weight by 5kg today.
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <h4 className="font-semibold text-cyan-400">
            Nutrition
          </h4>

          <p className="mt-2 text-sm text-slate-400">
            Consume 32g more protein before bedtime.
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <h4 className="font-semibold text-cyan-400">
            Sleep
          </h4>

          <p className="mt-2 text-sm text-slate-400">
            Target at least 8 hours tonight.
          </p>
        </div>
      </div>
    </div>
  );
}