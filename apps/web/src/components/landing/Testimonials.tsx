import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Powerlifter",
    review:
      "FitForge AI completely transformed my training. My squat increased by 25 kg in just 12 weeks thanks to the personalized programming.",
  },
  {
    name: "Sophia Williams",
    role: "Fitness Enthusiast",
    review:
      "The AI meal planning is incredible. I stopped guessing my nutrition and finally started seeing consistent results.",
  },
  {
    name: "Michael Chen",
    role: "CrossFit Athlete",
    review:
      "Recovery recommendations helped me avoid overtraining while improving my performance every week.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Testimonials
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Loved by
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Athletes Worldwide
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Thousands of athletes trust FitForge AI to improve strength,
            nutrition and recovery.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:-translate-y-2 hover:border-cyan-500"
            >
              <div className="mb-6 flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold text-black">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}