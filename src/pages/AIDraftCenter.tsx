import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Wand2, 
  Globe, 
  MessageSquare, 
  RefreshCw,
  Copy,
  Calendar,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Tone = "clinical" | "friendly" | "promotional" | "educational";
type Language = "en" | "ar";

interface Draft {
  id: string;
  title: string;
  content: string;
  tone: Tone;
  language: Language;
  aiConfidence: number;
  status: "draft" | "ready" | "warning";
  createdAt: string;
}

const drafts: Draft[] = [
  {
    id: "1",
    title: "Winter Vitamin D Tips",
    content: "As winter approaches, maintaining adequate vitamin D levels becomes essential for your health. Visit our pharmacy for a consultation on vitamin supplements tailored to your needs.",
    tone: "educational",
    language: "en",
    aiConfidence: 94,
    status: "ready",
    createdAt: "10 min ago"
  },
  {
    id: "2",
    title: "Free Health Screening Event",
    content: "Join us this Saturday for our free health screening event! Get your blood pressure, blood sugar, and BMI checked by our certified pharmacists. No appointment needed.",
    tone: "promotional",
    language: "en",
    aiConfidence: 88,
    status: "ready",
    createdAt: "1 hour ago"
  },
  {
    id: "3",
    title: "Medication Storage Tips",
    content: "Proper medication storage ensures effectiveness. Keep medicines in a cool, dry place away from direct sunlight. Some medications require refrigeration - check with our pharmacists.",
    tone: "clinical",
    language: "en",
    aiConfidence: 67,
    status: "warning",
    createdAt: "2 hours ago"
  }
];

const toneOptions: { value: Tone; label: string; description: string }[] = [
  { value: "clinical", label: "Clinical", description: "Professional & medical" },
  { value: "friendly", label: "Friendly", description: "Warm & approachable" },
  { value: "promotional", label: "Promotional", description: "Sales & conversion" },
  { value: "educational", label: "Educational", description: "Informative & trust" }
];

const AIDraftCenter = () => {
  const [selectedTone, setSelectedTone] = useState<Tone>("friendly");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");
  const [prompt, setPrompt] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-semibold text-foreground">AI Draft Center</h1>
          <p className="text-muted-foreground">Generate, refine, and manage AI-created content</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Generator */}
          <div className="col-span-2 space-y-6">
            {/* AI Generator Card */}
            <div className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Content Generator</h3>
                  <p className="text-sm text-muted-foreground">Describe what you want to post about</p>
                </div>
              </div>

              {/* Prompt Input */}
              <div className="mb-4">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., Create a post about the importance of staying hydrated during winter..."
                  className="w-full h-32 p-4 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Tone Selection */}
              <div className="mb-4">
                <label className="text-sm font-medium text-foreground mb-3 block">Content Tone</label>
                <div className="grid grid-cols-4 gap-3">
                  {toneOptions.map((tone) => (
                    <button
                      key={tone.value}
                      onClick={() => setSelectedTone(tone.value)}
                      className={cn(
                        "p-3 rounded-xl border text-left transition-all",
                        selectedTone === tone.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      )}
                    >
                      <p className="font-medium text-foreground text-sm">{tone.label}</p>
                      <p className="text-xs text-muted-foreground">{tone.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Toggle */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">Language</label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedLanguage("en")}
                    className={cn(
                      "px-4 py-2 rounded-lg border flex items-center gap-2 transition-all",
                      selectedLanguage === "en"
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    )}
                  >
                    <Globe className="w-4 h-4" />
                    English
                  </button>
                  <button
                    onClick={() => setSelectedLanguage("ar")}
                    className={cn(
                      "px-4 py-2 rounded-lg border flex items-center gap-2 transition-all",
                      selectedLanguage === "ar"
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    )}
                  >
                    <Globe className="w-4 h-4" />
                    العربية
                  </button>
                </div>
              </div>

              {/* Generate Button */}
              <Button className="w-full gap-2" size="lg">
                <Wand2 className="w-5 h-5" />
                Generate Content
              </Button>
            </div>

            {/* Recent Drafts */}
            <div className="card-elevated p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Recent Drafts</h3>
                <Button variant="outline" size="sm" className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </Button>
              </div>

              <div className="space-y-4">
                {drafts.map((draft) => (
                  <div key={draft.id} className="p-4 rounded-xl border border-border hover:border-primary/20 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground">{draft.title}</h4>
                          {draft.status === "ready" && (
                            <span className="compliance-badge compliance-passed">
                              <CheckCircle2 className="w-3 h-3" />
                              Ready
                            </span>
                          )}
                          {draft.status === "warning" && (
                            <span className="compliance-badge compliance-warning">
                              <AlertTriangle className="w-3 h-3" />
                              Needs Review
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{draft.createdAt}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground capitalize">
                          {draft.tone}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground uppercase">
                          {draft.language}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground mb-4 line-clamp-2">{draft.content}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Confidence:</span>
                        <span className={cn(
                          "text-sm font-medium",
                          draft.aiConfidence >= 80 ? "text-secondary" : "text-warning"
                        )}>
                          {draft.aiConfidence}%
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Copy className="w-4 h-4" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Calendar className="w-4 h-4" />
                          Schedule
                        </Button>
                        <Button size="sm">Edit & Review</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tips & Templates */}
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Templates</h3>
              <div className="space-y-3">
                {[
                  "Weekly Health Tip",
                  "Service Announcement",
                  "Seasonal Campaign",
                  "Health Awareness Day",
                  "Pharmacy Hours Update"
                ].map((template) => (
                  <button
                    key={template}
                    className="w-full p-3 rounded-lg border border-border text-left hover:border-primary/30 hover:bg-muted/50 transition-all"
                  >
                    <span className="text-sm font-medium text-foreground">{template}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="card-elevated p-6">
              <h3 className="font-semibold text-foreground mb-4">AI Tips</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  Be specific about your target audience
                </p>
                <p className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  Include seasonal or timely references
                </p>
                <p className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  Mention specific services you offer
                </p>
                <p className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  Keep compliance in mind - avoid medical claims
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIDraftCenter;
