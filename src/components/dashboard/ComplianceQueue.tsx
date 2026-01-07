import { Shield, AlertTriangle, Eye, CheckCircle, XCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QueueItem {
  id: string;
  title: string;
  content: string;
  aiConfidence: number;
  issues: string[];
  status: "needs-review" | "pharmacist-required" | "auto-flagged";
  createdAt: string;
}

const queueItems: QueueItem[] = [
  {
    id: "1",
    title: "Blood Pressure Medication Tips",
    content: "Regular monitoring of blood pressure helps track your health progress...",
    aiConfidence: 72,
    issues: ["Contains medication reference", "Requires pharmacist approval"],
    status: "pharmacist-required",
    createdAt: "2 hours ago"
  },
  {
    id: "2",
    title: "Cold & Flu Season Preparation",
    content: "Boost your immunity this winter with proper nutrition and rest...",
    aiConfidence: 91,
    issues: ["Minor: Consider adding disclaimer"],
    status: "needs-review",
    createdAt: "4 hours ago"
  },
  {
    id: "3",
    title: "Vitamin Supplement Guide",
    content: "Understanding which vitamins your body needs can improve...",
    aiConfidence: 45,
    issues: ["Contains dosage reference", "Health claims detected", "Requires revision"],
    status: "auto-flagged",
    createdAt: "5 hours ago"
  },
];

const statusConfig = {
  "needs-review": {
    label: "Needs Review",
    class: "compliance-review",
    icon: Eye,
  },
  "pharmacist-required": {
    label: "Pharmacist Required",
    class: "compliance-warning",
    icon: AlertTriangle,
  },
  "auto-flagged": {
    label: "Auto-Flagged",
    class: "compliance-failed",
    icon: XCircle,
  },
};

export function ComplianceQueue() {
  return (
    <div className="card-elevated p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Compliance Queue</h3>
            <p className="text-sm text-muted-foreground">{queueItems.length} posts awaiting review</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {queueItems.map((item) => {
          const statusInfo = statusConfig[item.status];
          const StatusIcon = statusInfo.icon;
          
          return (
            <div 
              key={item.id}
              className="p-4 rounded-xl border border-border hover:border-primary/20 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <span className={cn("compliance-badge", statusInfo.class)}>
                      <StatusIcon className="w-3 h-3" />
                      {statusInfo.label}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">{item.content}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">AI Confidence:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all",
                          item.aiConfidence >= 80 ? "bg-secondary" :
                          item.aiConfidence >= 60 ? "bg-warning" : "bg-destructive"
                        )}
                        style={{ width: `${item.aiConfidence}%` }}
                      />
                    </div>
                    <span className={cn(
                      "text-sm font-medium",
                      item.aiConfidence >= 80 ? "text-secondary" :
                      item.aiConfidence >= 60 ? "text-warning" : "text-destructive"
                    )}>
                      {item.aiConfidence}%
                    </span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{item.createdAt}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.issues.map((issue, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                  >
                    {issue}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="default">
                  <Eye className="w-4 h-4 mr-1" />
                  Review
                </Button>
                <Button size="sm" variant="outline" className="text-secondary border-secondary/20 hover:bg-secondary/10">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Approve
                </Button>
                <Button size="sm" variant="outline" className="text-destructive border-destructive/20 hover:bg-destructive/10">
                  <XCircle className="w-4 h-4 mr-1" />
                  Reject
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
        View full queue →
      </button>
    </div>
  );
}
