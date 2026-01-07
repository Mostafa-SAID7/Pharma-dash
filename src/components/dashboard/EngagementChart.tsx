import { BarChart3, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", engagement: 420, reach: 2400 },
  { name: "Tue", engagement: 380, reach: 2210 },
  { name: "Wed", engagement: 510, reach: 2900 },
  { name: "Thu", engagement: 470, reach: 2700 },
  { name: "Fri", engagement: 620, reach: 3200 },
  { name: "Sat", engagement: 580, reach: 3100 },
  { name: "Sun", engagement: 490, reach: 2800 },
];

export function EngagementChart() {
  return (
    <div className="card-elevated p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Weekly Engagement</h3>
            <p className="text-sm text-muted-foreground">Posts performance overview</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-secondary">
          <TrendingUp className="w-4 h-4" />
          <span className="font-medium">+12.5%</span>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgb(0 0 0 / 0.1)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Bar 
              dataKey="engagement" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]}
              name="Engagement"
            />
            <Bar 
              dataKey="reach" 
              fill="hsl(var(--accent))" 
              radius={[4, 4, 0, 0]}
              name="Reach"
              opacity={0.6}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Engagement</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <span className="text-sm text-muted-foreground">Reach</span>
        </div>
      </div>
    </div>
  );
}
