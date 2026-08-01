interface MetricCardProps {
  title: string;
  value: string;
}

export default function MetricCard({
  title,
  value,
}: MetricCardProps) {
  return (
    <div>
      <p className="text-sm text-slate-400">{title}</p>

      <h3 className="mt-2 text-3xl font-bold">{value}</h3>
    </div>
  );
}
