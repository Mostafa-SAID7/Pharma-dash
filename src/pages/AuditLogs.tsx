import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Filter, 
  Download, 
  Search,
  Sparkles,
  Shield,
  CheckCircle2,
  Calendar,
  User,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AuditLog {
  id: string;
  action: string;
  type: "ai_action" | "approval" | "publish" | "compliance" | "system";
  actor: string;
  target?: string;
  timestamp: string;
  details: string;
  status?: "success" | "warning" | "error";
}

const auditLogs: AuditLog[] = [
  {
    id: "1",
    action: "AI Generated Content",
    type: "ai_action",
    actor: "AI Agent",
    target: "Winter Health Tips Post",
    timestamp: "2025-01-07 14:32:15",
    details: "Generated new post draft with 94% confidence score",
    status: "success"
  },
  {
    id: "2",
    action: "Content Approved",
    type: "approval",
    actor: "Dr. Ahmad Hassan",
    target: "Free BP Check Event Post",
    timestamp: "2025-01-07 14:15:42",
    details: "Pharmacist approved medical content after compliance review",
    status: "success"
  },
  {
    id: "3",
    action: "Compliance Flag",
    type: "compliance",
    actor: "AI Compliance Engine",
    target: "Vitamin Supplement Guide",
    timestamp: "2025-01-07 13:45:22",
    details: "Blocked: Contains specific dosage recommendation",
    status: "error"
  },
  {
    id: "4",
    action: "Post Published",
    type: "publish",
    actor: "Sarah Ahmed",
    target: "Diabetes Awareness Month",
    timestamp: "2025-01-07 12:00:00",
    details: "Scheduled post published to Facebook Page",
    status: "success"
  },
  {
    id: "5",
    action: "Settings Updated",
    type: "system",
    actor: "Sarah Ahmed",
    timestamp: "2025-01-07 11:30:18",
    details: "Updated AI default tone from 'clinical' to 'friendly'",
    status: "success"
  },
  {
    id: "6",
    action: "Compliance Warning",
    type: "compliance",
    actor: "AI Compliance Engine",
    target: "Blood Pressure Tips Post",
    timestamp: "2025-01-07 10:22:45",
    details: "Warning: Contains medication reference, requires pharmacist review",
    status: "warning"
  },
  {
    id: "7",
    action: "Team Member Invited",
    type: "system",
    actor: "Dr. Ahmad Hassan",
    target: "new.member@medhealth.com",
    timestamp: "2025-01-05 16:42:33",
    details: "Invited new team member with Viewer role",
    status: "success"
  },
  {
    id: "8",
    action: "Content Rejected",
    type: "approval",
    actor: "Dr. Fatima Al-Rashid",
    target: "Pain Relief Promotion",
    timestamp: "2025-01-05 14:18:22",
    details: "Rejected: Content implies treatment claims",
    status: "error"
  }
];

const typeConfig = {
  ai_action: { icon: Sparkles, color: "text-primary", bg: "bg-primary/10" },
  approval: { icon: CheckCircle2, color: "text-secondary", bg: "bg-secondary/10" },
  publish: { icon: Calendar, color: "text-accent", bg: "bg-accent/10" },
  compliance: { icon: Shield, color: "text-warning", bg: "bg-warning/10" },
  system: { icon: FileText, color: "text-muted-foreground", bg: "bg-muted" }
};

const AuditLogs = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Audit Logs</h1>
            <p className="text-muted-foreground">Track all system activities and compliance actions</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Logs
          </Button>
        </div>

        {/* Filters */}
        <div className="card-elevated p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search logs..."
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                All Types
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                Last 7 Days
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                All Users
              </Button>
            </div>
          </div>
        </div>

        {/* Logs Timeline */}
        <div className="card-elevated">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Activity Timeline</h3>
            <span className="text-sm text-muted-foreground">{auditLogs.length} entries</span>
          </div>
          
          <div className="divide-y divide-border">
            {auditLogs.map((log) => {
              const config = typeConfig[log.type];
              const Icon = config.icon;
              
              return (
                <div key={log.id} className="p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", config.bg)}>
                      <Icon className={cn("w-5 h-5", config.color)} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <span className="font-medium text-foreground">{log.action}</span>
                          {log.target && (
                            <span className="text-muted-foreground"> — {log.target}</span>
                          )}
                        </div>
                        {log.status && (
                          <span className={cn(
                            "px-2 py-0.5 rounded-full text-xs font-medium",
                            log.status === "success" && "bg-secondary/10 text-secondary",
                            log.status === "warning" && "bg-warning/10 text-warning",
                            log.status === "error" && "bg-destructive/10 text-destructive"
                          )}>
                            {log.status}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">{log.details}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {log.actor}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {log.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          <div className="p-4 border-t border-border text-center">
            <Button variant="outline">Load More Logs</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AuditLogs;
