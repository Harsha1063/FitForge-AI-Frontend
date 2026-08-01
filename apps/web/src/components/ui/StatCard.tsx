interface StatCardProps {
  label: string;
  value: string;
}

export default function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white/5 p-5 border border-white/5">
      <p className="text-sm text-slate-400">{label}</p>

      <h3 className="mt-2 text-3xl font-bold">
        {value}
      </h3>
    </div>
  );
}