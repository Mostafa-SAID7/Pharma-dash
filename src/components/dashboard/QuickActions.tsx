import { Sparkles, Calendar, FileText, Zap } from "lucide-react";

interface QuickAction {
  icon: React.ElementType;
  label: string;
  description: string;
  color: string;
}

const actions: QuickAction[] = [
  {
    icon: Sparkles,
    label: "Generate Post",
    description: "AI creates new content",
    color: "bg-primary/10 text-primary hover:bg-primary/20"
  },
  {
    icon: Calendar,
    label: "Schedule Content",
    description: "Plan your posts",
    color: "bg-accent/10 text-accent hover:bg-accent/20"
  },
  {
    icon: FileText,
    label: "Use Template",
    description: "Pre-approved formats",
    color: "bg-secondary/10 text-secondary hover:bg-secondary/20"
  },
  {
    icon: Zap,
    label: "Quick Campaign",
    description: "Launch in minutes",
    color: "bg-warning/10 text-warning hover:bg-warning/20"
  },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map((action) => (
        <button
          key={action.label}
          className="card-elevated p-4 text-left hover:shadow-elevated transition-all group"
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${action.color}`}>
            <action.icon className="w-6 h-6" />
          </div>
          <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
            {action.label}
          </h4>
          <p className="text-sm text-muted-foreground">{action.description}</p>
        </button>
      ))}
    </div>
  );
}
