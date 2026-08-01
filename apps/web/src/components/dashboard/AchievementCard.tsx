import { Trophy } from "lucide-react";

export default function AchievementCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <Trophy className="text-yellow-400" />

        <h2 className="text-xl font-bold">
          Achievement
        </h2>
      </div>

      <div className="mt-8 text-center">
        <div className="text-6xl">🏆</div>

        <h3 className="mt-4 text-2xl font-bold">
          14 Day Streak
        </h3>

        <p className="mt-2 text-slate-400">
          Keep training to unlock new badges.
        </p>
      </div>
    </div>
  );
}