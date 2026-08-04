import { useState } from "react";

import WorkoutGenerator from "@/components/ai/WorkoutGenerator";
import WorkoutResult from "@/components/ai/WorkoutResult";

import DietGenerator from "@/components/ai/DietGenerator";
import DietResult from "@/components/ai/DietResult";

import AIChat from "@/components/ai/AIChat";
import AIAnalysis from "@/components/ai/AIAnalysis";

export default function AI() {
  const [tab, setTab] = useState<
    "workout" | "diet" | "chat" | "analysis"
  >("workout");

  const [workout, setWorkout] = useState<any>(null);
  const [diet, setDiet] = useState<any>(null);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-4xl font-black">
          🤖 FitForge AI Coach
        </h1>

        <p className="mt-2 text-slate-400">
          Your personal AI fitness assistant.
        </p>
      </div>

      {/* Tabs */}

      <div className="flex flex-wrap gap-4">

        <button
          onClick={() => setTab("workout")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            tab === "workout"
              ? "bg-cyan-500 text-black"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          💪 Workout
        </button>

        <button
          onClick={() => setTab("diet")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            tab === "diet"
              ? "bg-green-500 text-black"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          🥗 Diet
        </button>

        <button
          onClick={() => setTab("chat")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            tab === "chat"
              ? "bg-purple-500 text-black"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          💬 AI Chat
        </button>

        <button
          onClick={() => setTab("analysis")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            tab === "analysis"
              ? "bg-orange-500 text-black"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          📊 Analysis
        </button>

      </div>

      {/* Workout */}

      {tab === "workout" && (
        <div className="space-y-8">

          <WorkoutGenerator onGenerated={setWorkout} />

          {workout && (
            <WorkoutResult
              workout={workout.response || workout}
            />
          )}

        </div>
      )}

      {/* Diet */}

      {tab === "diet" && (
        <div className="space-y-8">

          <DietGenerator
            onGenerated={setDiet}
          />

          {diet && (
            <DietResult
              diet={diet.response || diet}
            />
          )}

        </div>
      )}

      {/* Chat */}

      {tab === "chat" && (
        <AIChat />
      )}

      {/* Analysis */}

      {tab === "analysis" && (
        <AIAnalysis />
      )}

    </div>
  );
}