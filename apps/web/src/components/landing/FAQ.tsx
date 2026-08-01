import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is FitForge AI?",
    answer:
      "FitForge AI is an AI-powered fitness platform that creates personalized workout plans, nutrition guidance, recovery insights, and progress tracking based on your goals.",
  },
  {
    question: "Can beginners use FitForge AI?",
    answer:
      "Absolutely! Whether you're a beginner or an experienced athlete, FitForge AI adapts your workouts and recommendations to your fitness level.",
  },
  {
    question: "Does FitForge AI create meal plans?",
    answer:
      "Yes. FitForge AI generates personalized meal plans, calorie targets, macronutrient recommendations, and hydration guidance.",
  },
  {
    question: "Can I connect my smartwatch?",
    answer:
      "Yes. You can sync supported wearable devices such as Apple Watch, Garmin, Fitbit, and other fitness trackers.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your subscription whenever you like with no hidden fees.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-950 py-32">
      <div className="mx-auto max-w-4xl px-8">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Frequently Asked
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-800 bg-slate-900/60"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-800 px-6 pb-6 pt-4 text-slate-400 leading-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}