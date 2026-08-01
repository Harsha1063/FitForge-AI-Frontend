import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`relative overflow-hidden py-28 px-6 lg:px-8 ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}