import {
  LayoutDashboard,
  Dumbbell,
  Bot,
  UtensilsCrossed,
  TrendingUp,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Workouts",
    path: "/dashboard/workouts",
    icon: Dumbbell,
  },
  {
    title: "Nutrition",
    path: "/dashboard/nutrition",
    icon: UtensilsCrossed,
  },
  {
    title: "AI Coach",
    path: "/dashboard/ai",
    icon: Bot,
  },
  {
    title: "Progress",
    path: "/dashboard/progress",
    icon: TrendingUp,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-black">
          FitForge
          <span className="text-cyan-400">AI</span>
        </h1>
      </div>

      <nav className="mt-8 px-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `mb-2 flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-cyan-500 text-black"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <link.icon size={20} />
            {link.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}