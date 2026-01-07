import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ComplianceScore } from "@/components/dashboard/ComplianceScore";
import { AIActivityFeed } from "@/components/dashboard/AIActivityFeed";
import { ContentCalendarPreview } from "@/components/dashboard/ContentCalendarPreview";
import { ComplianceQueue } from "@/components/dashboard/ComplianceQueue";
import { EngagementChart } from "@/components/dashboard/EngagementChart";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { FileText, Users, TrendingUp, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your pharmacy's social media overview.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
            <span className="text-sm text-muted-foreground">AI Agent</span>
            <span className="text-sm font-medium text-primary">Active</span>
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          <StatsCard
            title="Total Posts"
            value="127"
            change={{ value: 12, label: "vs last month" }}
            icon={FileText}
            iconColor="primary"
          />
          <StatsCard
            title="Engagement Rate"
            value="4.8%"
            change={{ value: 8, label: "vs last month" }}
            icon={TrendingUp}
            iconColor="secondary"
          />
          <StatsCard
            title="Page Followers"
            value="12.4K"
            change={{ value: 5.2, label: "vs last month" }}
            icon={Users}
            iconColor="accent"
          />
          <StatsCard
            title="AI-Generated"
            value="89"
            change={{ value: 23, label: "vs last month" }}
            icon={Sparkles}
            iconColor="primary"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - 2/3 width */}
          <div className="col-span-2 space-y-6">
            <EngagementChart />
            <ComplianceQueue />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            <ComplianceScore 
              score={94} 
              passed={42} 
              warnings={3} 
              failed={1} 
            />
            <AIActivityFeed />
            <ContentCalendarPreview />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
