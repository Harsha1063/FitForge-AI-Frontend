import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingCard({
  children,
  className,
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}