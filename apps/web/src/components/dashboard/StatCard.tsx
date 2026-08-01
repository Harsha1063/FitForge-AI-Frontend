import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
          {icon}
        </div>

        <span className="text-sm text-green-400">
          +12%
        </span>
      </div>

      <h3 className="mt-6 text-slate-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}