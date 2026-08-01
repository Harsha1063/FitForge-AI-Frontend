interface GlowProps {
  className?: string;
}

export default function Glow({ className = "" }: GlowProps) {
  return (
    <div
      className={`absolute rounded-full bg-cyan-500/15 blur-[140px] ${className}`}
    />
  );
}