interface FloatingStatProps {
  title: string;
  value: string;
}

export default function FloatingStat({
  title,
  value,
}: FloatingStatProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-xl">
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-2 text-3xl font-bold">{value}</h3>
    </div>
  );
}