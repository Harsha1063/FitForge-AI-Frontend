import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started.",
    button: "Get Started",
    featured: false,
    features: [
      "Basic Workout Plans",
      "Limited AI Coach",
      "Workout Tracking",
      "Community Access",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "Best for serious fitness enthusiasts.",
    button: "Start Pro",
    featured: true,
    features: [
      "Unlimited AI Coach",
      "Personalized Workout Plans",
      "AI Meal Planning",
      "Progress Analytics",
      "Recovery Insights",
      "Wearable Sync",
    ],
  },
  {
    name: "Elite",
    price: "$39",
    description: "Everything you need to maximize performance.",
    button: "Go Elite",
    featured: false,
    features: [
      "Everything in Pro",
      "Advanced AI Coaching",
      "Priority Support",
      "Performance Reports",
      "Early Access Features",
      "Team Collaboration",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-950 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Pricing
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Choose the Plan That
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Fits Your Goals
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Whether you're starting your fitness journey or training like
            a professional, FitForge AI has a plan for you.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-cyan-500 bg-cyan-500/10"
                  : "border-slate-800 bg-slate-900/60"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-black">
                  <Crown size={16} />
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-3 text-slate-400">
                {plan.description}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-6xl font-black">
                  {plan.price}
                </span>

                <span className="pb-2 text-slate-400">
                  /month
                </span>
              </div>

              <button
                className={`mt-10 w-full rounded-xl py-4 font-bold transition ${
                  plan.featured
                    ? "bg-cyan-500 text-black hover:bg-cyan-400"
                    : "border border-slate-700 hover:border-cyan-500"
                }`}
              >
                {plan.button}
              </button>

              <div className="mt-10 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check
                      className="text-cyan-400"
                      size={18}
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}