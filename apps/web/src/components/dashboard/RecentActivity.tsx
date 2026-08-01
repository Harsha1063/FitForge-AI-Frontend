import {
  CheckCircle2,
  Dumbbell,
  Apple,
} from "lucide-react";

const activities = [
  {
    icon: Dumbbell,
    title: "Completed Heavy Squat Workout",
    time: "30 mins ago",
  },
  {
    icon: Apple,
    title: "Logged Lunch (42g Protein)",
    time: "2 hours ago",
  },
  {
    icon: CheckCircle2,
    title: "Daily Goal Achieved",
    time: "Today",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4"
          >
            <div className="rounded-xl bg-cyan-500/10 p-3">
              <item.icon
                size={20}
                className="text-cyan-400"
              />
            </div>

            <div>
              <p className="font-medium">
                {item.title}
              </p>

              <p className="text-sm text-slate-500">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}