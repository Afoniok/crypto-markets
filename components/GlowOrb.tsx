// components/GlowOrb.tsx
import { cn } from "@/lib/utils"; // standard shadcn helper

interface GlowOrbProps {
  className?: string;
  color?: "blue" | "purple" | "yellow";
}

export function GlowOrb({ className, color = "blue" }: GlowOrbProps) {
  const colorMap = {
    blue: "bg-blue-600/20 shadow-[0_0_100px_40px_rgba(37,99,235,0.2)]",
    purple: "bg-purple-600/10 shadow-[0_0_100px_40px_rgba(147,51,234,0.1)]",
    yellow: "bg-yellow-600/10 shadow-[0_0_100px_40px_rgba(202,138,4,0.1)]",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full blur-[60px] pointer-events-none",
        colorMap[color],
        className
      )}
    />
  );
}