import { useEffect, useState } from "react";
import { Dumbbell } from "lucide-react";
import { getWorkouts } from "@/services/workoutService";
import type { Workout } from "@/services/workoutService";

export default function RecentActivity() {
  const [activities, setActivities] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadActivities() {
      try {
        const workouts = await getWorkouts();

        console.log("========== RECENT ACTIVITY ==========");
        console.log(workouts);

        setActivities(workouts.slice(0, 5));
      } catch (error) {
        console.error("Failed to load activities", error);
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-6 text-xl font-bold">
          Recent Activity
        </h2>

        <p className="text-slate-400">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold">
        Recent Activity
      </h2>

      {activities.length === 0 ? (
        <p className="text-slate-400">
          No recent activity.
        </p>
      ) : (
        <div className="space-y-5">
          {activities.map((workout) => (
            <div
              key={workout._id}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <Dumbbell
                  size={20}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <p className="font-medium">
                  Created{" "}
                  <span className="text-cyan-400">
                    {workout.title}
                  </span>{" "}
                  workout
                </p>

                <p className="text-sm text-slate-500">
  {new Date(workout.createdAt).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
})}
</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}