import {
  Brain,
  Dumbbell,
  UtensilsCrossed,
  ChartSpline,
  Trophy,
  Watch,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Personal Coach",
    description:
      "Get personalized workout recommendations powered by AI based on your goals and recovery.",
  },
  {
    icon: Dumbbell,
    title: "Smart Workout Plans",
    description:
      "Progressive strength and hypertrophy programs that automatically adapt every week.",
  },
  {
    icon: UtensilsCrossed,
    title: "AI Nutrition",
    description:
      "Custom meal plans, calorie tracking, macros, hydration and grocery recommendations.",
  },
  {
    icon: ChartSpline,
    title: "Advanced Analytics",
    description:
      "Track strength, PRs, body weight, body fat and progress with beautiful charts.",
  },
  {
    icon: Trophy,
    title: "Challenges",
    description:
      "Compete with friends, unlock achievements and stay motivated every day.",
  },
  {
    icon: Watch,
    title: "Wearable Sync",
    description:
      "Sync Apple Watch, Garmin, Fitbit and other fitness devices effortlessly.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Features
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Everything You Need To
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Transform Yourself
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            One intelligent platform to train smarter, eat better,
            recover faster and achieve your fitness goals.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}