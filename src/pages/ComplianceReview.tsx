import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Eye,
  Sparkles,
  Clock,
  User,
  FileText,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ComplianceItem {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  aiConfidence: number;
  status: "pending" | "pharmacist-required" | "flagged";
  issues: { type: "error" | "warning" | "info"; message: string }[];
  suggestedFix?: string;
}

const complianceItems: ComplianceItem[] = [
  {
    id: "1",
    title: "Blood Pressure Medication Tips",
    content: "Taking your blood pressure medication at the same time each day helps maintain consistent levels. Our pharmacists can help you set up a medication schedule that works for your lifestyle.",
    author: "AI Agent",
    createdAt: "2 hours ago",
    aiConfidence: 72,
    status: "pharmacist-required",
    issues: [
      { type: "warning", message: "Contains medication reference - requires pharmacist review" },
      { type: "info", message: "Consider adding general disclaimer" }
    ],
    suggestedFix: "Add 'Consult your healthcare provider for personalized advice' disclaimer"
  },
  {
    id: "2",
    title: "Vitamin Supplement Guide",
    content: "Take 1000 IU of Vitamin D daily to prevent deficiency. Studies show this dosage is optimal for most adults during winter months.",
    author: "Marketing Team",
    createdAt: "4 hours ago",
    aiConfidence: 35,
    status: "flagged",
    issues: [
      { type: "error", message: "Contains specific dosage recommendation - BLOCKED" },
      { type: "error", message: "Health claims detected without proper context" },
      { type: "warning", message: "May be interpreted as medical advice" }
    ],
    suggestedFix: "Remove specific dosages and recommend consulting a pharmacist for personalized vitamin needs"
  },
  {
    id: "3",
    title: "Cold & Flu Season Tips",
    content: "Boost your immunity this winter with proper hydration, rest, and a balanced diet. Visit our pharmacy for over-the-counter cold remedies and speak with our team for recommendations.",
    author: "AI Agent",
    createdAt: "5 hours ago",
    aiConfidence: 91,
    status: "pending",
    issues: [
      { type: "info", message: "General health advice - low risk" }
    ]
  },
  {
    id: "4",
    title: "Diabetes Prevention Post",
    content: "Regular exercise and a healthy diet can help prevent Type 2 diabetes. Our pharmacy offers free blood glucose testing every Saturday.",
    author: "AI Agent",
    createdAt: "6 hours ago",
    aiConfidence: 88,
    status: "pending",
    issues: [
      { type: "info", message: "Factual health information with service promotion" }
    ]
  }
];

const statusConfig = {
  pending: { label: "Pending Review", class: "compliance-review", icon: Eye },
  "pharmacist-required": { label: "Pharmacist Required", class: "compliance-warning", icon: AlertTriangle },
  flagged: { label: "Flagged - Blocked", class: "compliance-failed", icon: XCircle }
};

const ComplianceReview = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Compliance Queue</h1>
            <p className="text-muted-foreground">Review and approve content for regulatory compliance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          <div className="card-elevated p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Pending Review</p>
              </div>
            </div>
          </div>
          <div className="card-elevated p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Pharmacist Required</p>
              </div>
            </div>
          </div>
          <div className="card-elevated p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Flagged Content</p>
              </div>
            </div>
          </div>
          <div className="card-elevated p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">89</p>
                <p className="text-sm text-muted-foreground">Approved This Month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Items */}
        <div className="space-y-4">
          {complianceItems.map((item) => {
            const statusInfo = statusConfig[item.status];
            const StatusIcon = statusInfo.icon;

            return (
              <div key={item.id} className="card-elevated p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                      <span className={cn("compliance-badge", statusInfo.class)}>
                        <StatusIcon className="w-3 h-3" />
                        {statusInfo.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {item.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.createdAt}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">AI Confidence:</span>
                    <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full",
                          item.aiConfidence >= 80 ? "bg-secondary" :
                          item.aiConfidence >= 60 ? "bg-warning" : "bg-destructive"
                        )}
                        style={{ width: `${item.aiConfidence}%` }}
                      />
                    </div>
                    <span className={cn(
                      "text-sm font-semibold",
                      item.aiConfidence >= 80 ? "text-secondary" :
                      item.aiConfidence >= 60 ? "text-warning" : "text-destructive"
                    )}>
                      {item.aiConfidence}%
                    </span>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border mb-4">
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-foreground">{item.content}</p>
                  </div>
                </div>

                {/* Issues */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-foreground">Compliance Issues:</p>
                  {item.issues.map((issue, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "flex items-start gap-2 p-3 rounded-lg",
                        issue.type === "error" && "bg-destructive/5 border border-destructive/20",
                        issue.type === "warning" && "bg-warning/5 border border-warning/20",
                        issue.type === "info" && "bg-primary/5 border border-primary/20"
                      )}
                    >
                      {issue.type === "error" && <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />}
                      {issue.type === "warning" && <AlertTriangle className="w-4 h-4 text-warning mt-0.5 shrink-0" />}
                      {issue.type === "info" && <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />}
                      <span className="text-sm text-foreground">{issue.message}</span>
                    </div>
                  ))}
                </div>

                {/* Suggested Fix */}
                {item.suggestedFix && (
                  <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/20 mb-4">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-secondary mb-1">AI Suggested Fix:</p>
                        <p className="text-sm text-foreground">{item.suggestedFix}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <Button variant="default" className="gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Approve
                  </Button>
                  <Button variant="outline" className="gap-2 text-warning border-warning/20 hover:bg-warning/10">
                    <AlertTriangle className="w-4 h-4" />
                    Request Changes
                  </Button>
                  <Button variant="outline" className="gap-2 text-destructive border-destructive/20 hover:bg-destructive/10">
                    <XCircle className="w-4 h-4" />
                    Reject
                  </Button>
                  <Button variant="outline" className="ml-auto">
                    View Full Details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComplianceReview;
