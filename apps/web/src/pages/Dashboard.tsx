import StatCard from "@/components/dashboard/StatCard";
import WeeklyChart from "@/components/dashboard/WeeklyChart";
import WorkoutCard from "@/components/dashboard/WorkoutCard";
import AIWidget from "@/components/dashboard/AIWidget";
import { stats } from "@/data/dashboard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import NutritionCard from "@/components/dashboard/NutritionCard";
import AchievementCard from "@/components/dashboard/AchievementCard";

export default function Dashboard() {
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

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyChart />
        </div>

        <AIWidget />
      </div>

      <WorkoutCard />
      <div className="grid gap-6 lg:grid-cols-3">
  <RecentActivity />
  <NutritionCard />
  <AchievementCard />
</div>
    </div>
  );
}