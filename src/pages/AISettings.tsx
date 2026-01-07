import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Sparkles, 
  Shield, 
  Globe, 
  MessageSquare,
  Bell,
  Save,
  RotateCcw
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const AISettings = () => {
  const [defaultTone, setDefaultTone] = useState("friendly");
  const [defaultLanguage, setDefaultLanguage] = useState("en");
  const [autoCompliance, setAutoCompliance] = useState(true);
  const [pharmacistRequired, setPharmacistRequired] = useState(true);
  const [aiSuggestions, setAiSuggestions] = useState(true);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">AI Rules & Settings</h1>
            <p className="text-muted-foreground">Configure AI agent behavior and compliance rules</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Reset to Defaults
            </Button>
            <Button className="gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>

        {/* AI Content Settings */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">AI Content Generation</h3>
              <p className="text-sm text-muted-foreground">Default settings for AI-generated content</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Default Tone */}
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Default Content Tone</label>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: "clinical", label: "Clinical", desc: "Professional & medical" },
                  { value: "friendly", label: "Friendly", desc: "Warm & approachable" },
                  { value: "promotional", label: "Promotional", desc: "Sales & conversion" },
                  { value: "educational", label: "Educational", desc: "Informative & trust" }
                ].map((tone) => (
                  <button
                    key={tone.value}
                    onClick={() => setDefaultTone(tone.value)}
                    className={cn(
                      "p-3 rounded-xl border text-left transition-all",
                      defaultTone === tone.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <p className="font-medium text-foreground text-sm">{tone.label}</p>
                    <p className="text-xs text-muted-foreground">{tone.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Default Language */}
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Default Language</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setDefaultLanguage("en")}
                  className={cn(
                    "px-4 py-2 rounded-lg border flex items-center gap-2 transition-all",
                    defaultLanguage === "en"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  )}
                >
                  <Globe className="w-4 h-4" />
                  English
                </button>
                <button
                  onClick={() => setDefaultLanguage("ar")}
                  className={cn(
                    "px-4 py-2 rounded-lg border flex items-center gap-2 transition-all",
                    defaultLanguage === "ar"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  )}
                >
                  <Globe className="w-4 h-4" />
                  العربية (Arabic)
                </button>
                <button
                  onClick={() => setDefaultLanguage("ar-local")}
                  className={cn(
                    "px-4 py-2 rounded-lg border flex items-center gap-2 transition-all",
                    defaultLanguage === "ar-local"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  )}
                >
                  <Globe className="w-4 h-4" />
                  Arabic (Dialect)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Rules */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Compliance Rules</h3>
              <p className="text-sm text-muted-foreground">Regulatory compliance and content safety</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Toggle Settings */}
            {[
              {
                id: "autoCompliance",
                label: "Auto-Compliance Scan",
                description: "Automatically scan all content for regulatory compliance before scheduling",
                value: autoCompliance,
                onChange: setAutoCompliance
              },
              {
                id: "pharmacistRequired",
                label: "Pharmacist Approval Required",
                description: "Require licensed pharmacist approval for posts containing medical content",
                value: pharmacistRequired,
                onChange: setPharmacistRequired
              },
              {
                id: "aiSuggestions",
                label: "AI Fix Suggestions",
                description: "Allow AI to suggest compliant alternatives for flagged content",
                value: aiSuggestions,
                onChange: setAiSuggestions
              }
            ].map((setting) => (
              <div key={setting.id} className="flex items-center justify-between p-4 rounded-xl border border-border">
                <div>
                  <p className="font-medium text-foreground">{setting.label}</p>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
                <button
                  onClick={() => setting.onChange(!setting.value)}
                  className={cn(
                    "w-12 h-6 rounded-full transition-colors relative",
                    setting.value ? "bg-primary" : "bg-muted"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded-full bg-white shadow-sm absolute top-0.5 transition-transform",
                    setting.value ? "translate-x-6" : "translate-x-0.5"
                  )} />
                </button>
              </div>
            ))}
          </div>

          {/* Blocked Keywords */}
          <div className="mt-6 pt-6 border-t border-border">
            <label className="text-sm font-medium text-foreground mb-3 block">Blocked Phrases (Auto-Flagged)</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {[
                "cure", "treat", "dosage", "mg", "prescription", 
                "diagnose", "prevent disease", "guaranteed"
              ].map((keyword) => (
                <span 
                  key={keyword}
                  className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <Button variant="outline" size="sm">Manage Keywords</Button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Notifications</h3>
              <p className="text-sm text-muted-foreground">Configure AI agent notifications</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "New AI drafts ready for review", enabled: true },
              { label: "Compliance issues detected", enabled: true },
              { label: "Posts pending pharmacist approval", enabled: true },
              { label: "Scheduled post reminders", enabled: false },
              { label: "Weekly performance summaries", enabled: true }
            ].map((notif, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <span className="text-sm text-foreground">{notif.label}</span>
                <div className={cn(
                  "w-10 h-5 rounded-full transition-colors relative cursor-pointer",
                  notif.enabled ? "bg-primary" : "bg-muted"
                )}>
                  <div className={cn(
                    "w-4 h-4 rounded-full bg-white shadow-sm absolute top-0.5 transition-transform",
                    notif.enabled ? "translate-x-5" : "translate-x-0.5"
                  )} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AISettings;
