import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle,
  Share2,
  Download,
  Calendar,
  Sparkles
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

const weeklyData = [
  { name: "Mon", engagement: 420, reach: 2400, clicks: 180 },
  { name: "Tue", engagement: 380, reach: 2210, clicks: 145 },
  { name: "Wed", engagement: 510, reach: 2900, clicks: 220 },
  { name: "Thu", engagement: 470, reach: 2700, clicks: 195 },
  { name: "Fri", engagement: 620, reach: 3200, clicks: 280 },
  { name: "Sat", engagement: 580, reach: 3100, clicks: 250 },
  { name: "Sun", engagement: 490, reach: 2800, clicks: 210 },
];

const monthlyTrend = [
  { month: "Aug", followers: 9200 },
  { month: "Sep", followers: 9800 },
  { month: "Oct", followers: 10500 },
  { month: "Nov", followers: 11200 },
  { month: "Dec", followers: 11900 },
  { month: "Jan", followers: 12400 },
];

const postTypeData = [
  { name: "Health Tips", value: 42, color: "hsl(var(--secondary))" },
  { name: "Promotions", value: 28, color: "hsl(var(--primary))" },
  { name: "Awareness", value: 18, color: "hsl(var(--accent))" },
  { name: "General", value: 12, color: "hsl(var(--muted-foreground))" },
];

const topPosts = [
  { title: "Winter Flu Prevention Tips", engagement: 1240, reach: 8500, type: "Health Tip" },
  { title: "Free Health Screening Event", engagement: 980, reach: 6200, type: "Promotion" },
  { title: "Diabetes Awareness Month", engagement: 856, reach: 5800, type: "Awareness" },
  { title: "New Pharmacy Hours", engagement: 542, reach: 4200, type: "General" },
  { title: "Blood Pressure Monitoring", engagement: 498, reach: 3900, type: "Health Tip" },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Analytics & Insights</h1>
            <p className="text-muted-foreground">Track your Facebook page performance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Last 30 Days
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          <StatsCard
            title="Total Reach"
            value="48.2K"
            change={{ value: 15.3, label: "vs last month" }}
            icon={Eye}
            iconColor="primary"
          />
          <StatsCard
            title="Engagement Rate"
            value="4.8%"
            change={{ value: 8.2, label: "vs last month" }}
            icon={Heart}
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
            title="Link Clicks"
            value="1,847"
            change={{ value: -2.1, label: "vs last month" }}
            icon={TrendingUp}
            iconColor="warning"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-3 gap-6">
          {/* Weekly Performance */}
          <div className="col-span-2 card-elevated p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Weekly Performance</h3>
                <p className="text-sm text-muted-foreground">Engagement and reach metrics</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  Engagement
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  Reach
                </span>
              </div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barGap={8}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="engagement" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="reach" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} opacity={0.6} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Post Type Distribution */}
          <div className="card-elevated p-6">
            <h3 className="font-semibold text-foreground mb-2">Content Mix</h3>
            <p className="text-sm text-muted-foreground mb-4">Post types this month</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={postTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {postTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {postTypeData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Charts Row */}
        <div className="grid grid-cols-3 gap-6">
          {/* Follower Growth */}
          <div className="col-span-2 card-elevated p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Follower Growth</h3>
                <p className="text-sm text-muted-foreground">6-month trend</p>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+34.8% growth</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="followers" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Insights */}
          <div className="card-elevated p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Insights</h3>
                <p className="text-sm text-muted-foreground">Recommendations</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                <p className="text-sm text-foreground">
                  <strong className="text-secondary">Best time to post:</strong> Fridays at 2-4 PM show 23% higher engagement
                </p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong className="text-primary">Content suggestion:</strong> Health tips outperform promotions by 2.3x
                </p>
              </div>
              <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                <p className="text-sm text-foreground">
                  <strong className="text-accent">Audience insight:</strong> 68% of engaged users are 35-54 age group
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Posts */}
        <div className="card-elevated p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Top Performing Posts</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Post Title</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Engagement</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Reach</th>
                </tr>
              </thead>
              <tbody>
                {topPosts.map((post, index) => (
                  <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-medium text-foreground">{post.title}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                        {post.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Heart className="w-4 h-4 text-destructive" />
                        <span className="font-medium text-foreground">{post.engagement.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{post.reach.toLocaleString()}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
