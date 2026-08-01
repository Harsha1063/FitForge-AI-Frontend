import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-cyan-400 text-slate-900 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
          : "border border-slate-700 bg-slate-900/60 text-white hover:border-cyan-400",
        className
      )}
    />
  );
}