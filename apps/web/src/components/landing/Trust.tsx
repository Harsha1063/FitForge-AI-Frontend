export default function Trust() {
  const stats = [
    {
      value: "25K+",
      label: "Active Athletes",
    },
    {
      value: "1.2M+",
      label: "Workouts Completed",
    },
    {
      value: "98%",
      label: "Success Rate",
    },
    {
      value: "4.9★",
      label: "User Rating",
    },
  ];

  return (
    <section className="border-y border-slate-800 bg-slate-950/60 py-20">
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-slate-500">
          Trusted by athletes, coaches & fitness enthusiasts
        </p>

        {/* Logos */}

        <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-5">
          {["Nike", "Gymshark", "Fitbit", "Garmin", "CrossFit"].map((brand) => (
            <div
              key={brand}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 py-6 text-lg font-bold text-slate-500 transition hover:border-cyan-500 hover:text-cyan-400"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center transition hover:border-cyan-500"
            >
              <h2 className="text-4xl font-black text-cyan-400">
                {stat.value}
              </h2>

              <p className="mt-3 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}