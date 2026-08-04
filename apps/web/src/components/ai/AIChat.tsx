import { useEffect, useRef, useState } from "react";
import { chatWithAI } from "@/services/aiService";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const question = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
    ]);

    setInput("");

    try {
      setLoading(true);

      const result = await chatWithAI(question);

      if (!result.success) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text:
              result.message ??
              "AI is temporarily unavailable.",
          },
        ]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: result.response,
        },
      ]);
    } catch (err: any) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            err?.response?.data?.message ??
            "Unable to contact AI service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        💬 AI Fitness Coach
      </h2>

      <div className="mb-6 h-[550px] overflow-y-auto rounded-xl bg-slate-950 p-5">

        {messages.length === 0 && (
          <p className="text-slate-500">
            Ask anything about workouts,
            nutrition, recovery,
            supplements or fitness...
          </p>
        )}

        <div className="space-y-5">

          {messages.map((message, index) => (

            <div
              key={index}
              className={`rounded-2xl p-5 ${
                message.role === "user"
                  ? "ml-20 bg-cyan-500 text-black"
                  : "mr-20 bg-slate-800"
              }`}
            >

              {message.role === "assistant" ? (
                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown>
                    {message.text}
                  </ReactMarkdown>
                </div>
              ) : (
                <p>{message.text}</p>
              )}

            </div>

          ))}

          {loading && (
            <div className="mr-20 rounded-2xl bg-slate-800 p-5">
              🤖 Thinking...
            </div>
          )}

          <div ref={bottomRef} />

        </div>

      </div>

      <div className="flex gap-4">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask FitForge AI..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-950 p-4"
        />

        <button
          disabled={loading}
          onClick={sendMessage}
          className="rounded-xl bg-cyan-500 px-8 font-bold text-black disabled:opacity-60"
        >
          Send
        </button>

      </div>

    </div>
  );
}