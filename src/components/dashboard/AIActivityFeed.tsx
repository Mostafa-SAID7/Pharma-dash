import { Sparkles, FileText, Shield, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: "draft" | "compliance" | "scheduled" | "published";
  title: string;
  description: string;
  time: string;
  status?: "success" | "warning" | "pending";
}

const activities: Activity[] = [
  {
    id: "1",
    type: "draft",
    title: "AI generated new post",
    description: "Weekly health tip about vitamin D supplements",
    time: "5 min ago",
    status: "pending"
  },
  {
    id: "2",
    type: "compliance",
    title: "Compliance check passed",
    description: "Post about flu vaccination awareness",
    time: "15 min ago",
    status: "success"
  },
  {
    id: "3",
    type: "scheduled",
    title: "Post scheduled",
    description: "Diabetes awareness month campaign",
    time: "1 hour ago",
    status: "success"
  },
  {
    id: "4",
    type: "compliance",
    title: "Compliance warning",
    description: "Blood pressure medication post needs review",
    time: "2 hours ago",
    status: "warning"
  },
  {
    id: "5",
    type: "published",
    title: "Post published",
    description: "Pharmacy opening hours update",
    time: "3 hours ago",
    status: "success"
  },
];

const typeIconMap = {
  draft: Sparkles,
  compliance: Shield,
  scheduled: Clock,
  published: CheckCircle2,
};

const typeColorMap = {
  draft: "bg-primary/10 text-primary",
  compliance: "bg-secondary/10 text-secondary",
  scheduled: "bg-accent/10 text-accent",
  published: "bg-secondary/10 text-secondary",
};

export function AIActivityFeed() {
  return (
    <div className="card-elevated p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">AI Activity</h3>
            <p className="text-sm text-muted-foreground">Recent agent actions</p>
          </div>
        </div>
        <span className="ai-badge">Live</span>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = typeIconMap[activity.type];
          return (
            <div 
              key={activity.id} 
              className={cn(
                "flex gap-4 pb-4 animate-slide-up",
                index !== activities.length - 1 && "border-b border-border"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", typeColorMap[activity.type])}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-foreground">{activity.title}</p>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
        View all activity →
      </button>
    </div>
  );
}
