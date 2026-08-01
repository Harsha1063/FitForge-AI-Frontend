import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-slate-950 to-blue-500/10" />

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-8">
        <div className="rounded-[40px] border border-cyan-500/20 bg-slate-900/70 p-16 text-center backdrop-blur-xl">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            🚀 Start Your Transformation Today
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
            Stronger Every Day.
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Smarter With AI.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Join thousands of athletes using FitForge AI to train
            smarter, recover faster, and reach their goals with
            personalized AI coaching.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-400">
              Start Free
              <ArrowRight size={20} />
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-cyan-500 hover:bg-slate-800">
              Schedule Demo
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <span>✅ Free 14-Day Trial</span>
            <span>✅ No Credit Card Required</span>
            <span>✅ Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
} 