import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    label: string;
  };
  icon: LucideIcon;
  iconColor?: "primary" | "secondary" | "accent" | "warning";
}

const iconColorMap = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
  warning: "bg-warning/10 text-warning",
};

export function StatsCard({ title, value, change, icon: Icon, iconColor = "primary" }: StatsCardProps) {
  const isPositive = change && change.value >= 0;
  
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-semibold text-foreground">{value}</p>
        </div>
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", iconColorMap[iconColor])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      {change && (
        <div className="mt-4 flex items-center gap-2">
          <div className={cn(
            "flex items-center gap-1 text-sm font-medium",
            isPositive ? "text-secondary" : "text-destructive"
          )}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{isPositive ? "+" : ""}{change.value}%</span>
          </div>
          <span className="text-sm text-muted-foreground">{change.label}</span>
        </div>
      )}
    </div>
  );
}
