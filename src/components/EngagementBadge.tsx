import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

interface EngagementBadgeProps {
  level: "High" | "Medium" | "Low";
}

const styles: Record<string, string> = {
  High: "bg-engagement-high/15 text-engagement-high border-engagement-high/30",
  Medium: "bg-engagement-medium/15 text-engagement-medium border-engagement-medium/30",
  Low: "bg-engagement-low/15 text-engagement-low border-engagement-low/30",
};

const EngagementBadge = ({ level }: EngagementBadgeProps) => {
  return (
    <Badge variant="outline" className={`font-semibold ${styles[level]}`}>
      {level}
    </Badge>
  );
};

interface RPDisplayProps {
  points: number;
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<string, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

export const RPDisplay = ({ points, size = "md" }: RPDisplayProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <Award className={`${size === "lg" ? "h-7 w-7" : size === "md" ? "h-5 w-5" : "h-4 w-4"} text-gold`} />
      <span className={`font-display font-bold text-gradient-gold ${sizeClasses[size]}`}>
        {points.toLocaleString()}
      </span>
      <span className="text-xs font-medium text-muted-foreground">RP</span>
    </div>
  );
};

export default EngagementBadge;
