import { UserPlus, Sparkles, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Tell FitForge AI about your goals, experience level, equipment, and schedule.",
  },
  {
    icon: Sparkles,
    title: "Get Your AI Plan",
    description:
      "Receive a personalized workout and nutrition plan generated specifically for you.",
  },
  {
    icon: Trophy,
    title: "Track & Improve",
    description:
      "Monitor progress, break plateaus, and continuously improve with AI insights.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900/40 py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <h2 className="text-5xl font-black">
            How
            <span className="text-cyan-400"> FitForge AI </span>
            Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Three simple steps to begin your transformation.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-800 bg-slate-900 p-8"
              >
                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
                  {index + 1}
                </div>

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}