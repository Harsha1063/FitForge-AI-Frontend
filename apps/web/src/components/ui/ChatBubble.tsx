interface ChatBubbleProps {
  message: string;
  from: "ai" | "user";
}

export default function ChatBubble({
  message,
  from,
}: ChatBubbleProps) {
  const isAI = from === "ai";

  return (
    <div
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 ${
          isAI
            ? "bg-cyan-500/10 border border-cyan-400/20 text-white"
            : "bg-white/10 border border-white/10 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
}