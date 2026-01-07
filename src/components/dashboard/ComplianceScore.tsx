import { Shield, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

interface ComplianceScoreProps {
  score: number;
  passed: number;
  warnings: number;
  failed: number;
}

export function ComplianceScore({ score, passed, warnings, failed }: ComplianceScoreProps) {
  const getScoreColor = () => {
    if (score >= 90) return "text-secondary";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="card-elevated p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Shield className="w-5 h-5 text-secondary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Compliance Health</h3>
          <p className="text-sm text-muted-foreground">Last 30 days overview</p>
        </div>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-muted"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${score * 2.83} 283`}
              className={getScoreColor()}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${getScoreColor()}`}>{score}%</span>
            <span className="text-xs text-muted-foreground">Score</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-3 rounded-lg bg-secondary/5">
          <div className="flex items-center justify-center gap-1 mb-1">
            <CheckCircle2 className="w-4 h-4 text-secondary" />
            <span className="text-lg font-semibold text-secondary">{passed}</span>
          </div>
          <p className="text-xs text-muted-foreground">Passed</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-warning/5">
          <div className="flex items-center justify-center gap-1 mb-1">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <span className="text-lg font-semibold text-warning">{warnings}</span>
          </div>
          <p className="text-xs text-muted-foreground">Warnings</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-destructive/5">
          <div className="flex items-center justify-center gap-1 mb-1">
            <XCircle className="w-4 h-4 text-destructive" />
            <span className="text-lg font-semibold text-destructive">{failed}</span>
          </div>
          <p className="text-xs text-muted-foreground">Failed</p>
        </div>
      </div>
    </div>
  );
}
