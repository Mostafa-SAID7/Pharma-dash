import { Calendar, ChevronRight } from "lucide-react";

interface ScheduledPost {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "health-tip" | "promotion" | "awareness" | "general";
  status: "scheduled" | "pending-approval";
}

const scheduledPosts: ScheduledPost[] = [
  {
    id: "1",
    title: "Winter Health Tips: Stay Hydrated",
    date: "Today",
    time: "2:00 PM",
    type: "health-tip",
    status: "scheduled"
  },
  {
    id: "2",
    title: "Free Blood Pressure Check Event",
    date: "Tomorrow",
    time: "10:00 AM",
    type: "promotion",
    status: "scheduled"
  },
  {
    id: "3",
    title: "Diabetes Awareness Month",
    date: "Jan 10",
    time: "9:00 AM",
    type: "awareness",
    status: "pending-approval"
  },
  {
    id: "4",
    title: "Pharmacy Extended Hours Notice",
    date: "Jan 12",
    time: "8:00 AM",
    type: "general",
    status: "scheduled"
  },
];

const typeColorMap = {
  "health-tip": "bg-secondary/10 text-secondary border-secondary/20",
  "promotion": "bg-primary/10 text-primary border-primary/20",
  "awareness": "bg-accent/10 text-accent border-accent/20",
  "general": "bg-muted text-muted-foreground border-border",
};

const typeLabelMap = {
  "health-tip": "Health Tip",
  "promotion": "Promotion",
  "awareness": "Awareness",
  "general": "General",
};

export function ContentCalendarPreview() {
  return (
    <div className="card-elevated p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Upcoming Posts</h3>
            <p className="text-sm text-muted-foreground">Next 7 days schedule</p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          View Calendar <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {scheduledPosts.map((post) => (
          <div 
            key={post.id}
            className="p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-muted/50 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {post.title}
              </h4>
              {post.status === "pending-approval" && (
                <span className="compliance-badge compliance-review shrink-0 ml-2">
                  Needs Approval
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${typeColorMap[post.type]}`}>
                {typeLabelMap[post.type]}
              </span>
              <span className="text-xs text-muted-foreground">
                {post.date} at {post.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
