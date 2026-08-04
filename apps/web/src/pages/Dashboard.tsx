import { useEffect, useState } from "react";
import {
  Flame,
  Dumbbell,
  Trophy,
  Activity,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import WeeklyChart from "@/components/dashboard/WeeklyChart";
import WorkoutCard from "@/components/dashboard/WorkoutCard";
import AIWidget from "@/components/dashboard/AIWidget";
import RecentActivity from "@/components/dashboard/RecentActivity";
import NutritionCard from "@/components/dashboard/NutritionCard";
import AchievementCard from "@/components/dashboard/AchievementCard";

import { getDashboard } from "@/services/dashboardService";

interface DashboardData {
  fitnessScore: number;
  latestWeight: number;
  goalProgress: number;
  workoutCount: number;

  today: {
    calories: number;
    protein: number;
    water: number;
    workoutCompleted: boolean;
  };
}

export default function Dashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboard();

        console.log("========== DASHBOARD ==========");
        console.log(data);

        setDashboard(data);
      } catch (err) {
        console.error("Dashboard Error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center text-slate-400">
        Loading Dashboard...
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="p-10 text-center text-red-400">
        Failed to load dashboard.
      </div>
    );
  }

  const stats = [
    {
      title: "Calories",
      value: `${dashboard.today.calories}`,
      subtitle: "Today's Calories",
      icon: Flame,
    },
    {
      title: "Protein",
      value: `${dashboard.today.protein} g`,
      subtitle: "Today's Protein",
      icon: Trophy,
    },
    {
      title: "Fitness Score",
      value: `${dashboard.fitnessScore}`,
      subtitle: "AI Fitness Score",
      icon: Activity,
    },
    {
      title: "Workouts",
      value: `${dashboard.workoutCount}`,
      subtitle: "Total Workouts",
      icon: Dumbbell,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back! Here's your fitness overview.
        </p>
      </div>

      {/* Live Stat Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
            icon={<item.icon size={24} />}
          />
        ))}
      </div>

      {/* Weekly Chart + AI */}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyChart />
        </div>

        <AIWidget />
      </div>

      {/* Today's Workout */}

      <WorkoutCard />

      {/* Bottom Cards */}

      <div className="grid gap-6 lg:grid-cols-3">
        <RecentActivity />
        <NutritionCard />
        <AchievementCard />
      </div>
    </div>
  );
}