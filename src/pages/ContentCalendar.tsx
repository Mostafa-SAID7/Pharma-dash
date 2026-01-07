import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  Clock,
  Eye,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ScheduledPost {
  id: string;
  title: string;
  time: string;
  type: "health-tip" | "promotion" | "awareness" | "general";
  status: "scheduled" | "pending" | "published";
}

interface DayData {
  day: number;
  isCurrentMonth: boolean;
  isToday?: boolean;
  posts: ScheduledPost[];
}

const typeColors = {
  "health-tip": "bg-secondary/20 text-secondary border-secondary/30",
  "promotion": "bg-primary/20 text-primary border-primary/30",
  "awareness": "bg-accent/20 text-accent border-accent/30",
  "general": "bg-muted text-muted-foreground border-border",
};

// Generate calendar data
const generateCalendarDays = (): DayData[] => {
  const days: DayData[] = [];
  
  // Previous month days (last few days of December)
  for (let i = 30; i <= 31; i++) {
    days.push({ day: i, isCurrentMonth: false, posts: [] });
  }
  
  // Current month days (January)
  for (let i = 1; i <= 31; i++) {
    const posts: ScheduledPost[] = [];
    
    if (i === 7) {
      posts.push({ id: "1", title: "Winter Health Tips", time: "2:00 PM", type: "health-tip", status: "scheduled" });
    }
    if (i === 8) {
      posts.push({ id: "2", title: "Free BP Check Event", time: "10:00 AM", type: "promotion", status: "scheduled" });
      posts.push({ id: "3", title: "Vitamin D Awareness", time: "4:00 PM", type: "awareness", status: "pending" });
    }
    if (i === 10) {
      posts.push({ id: "4", title: "Diabetes Month", time: "9:00 AM", type: "awareness", status: "scheduled" });
    }
    if (i === 12) {
      posts.push({ id: "5", title: "Extended Hours", time: "8:00 AM", type: "general", status: "scheduled" });
    }
    if (i === 15) {
      posts.push({ id: "6", title: "Flu Shot Reminder", time: "11:00 AM", type: "health-tip", status: "scheduled" });
    }
    if (i === 18) {
      posts.push({ id: "7", title: "Weekend Special", time: "9:00 AM", type: "promotion", status: "pending" });
    }
    if (i === 22) {
      posts.push({ id: "8", title: "Heart Health Week", time: "10:00 AM", type: "awareness", status: "scheduled" });
    }
    
    days.push({ 
      day: i, 
      isCurrentMonth: true, 
      isToday: i === 7,
      posts 
    });
  }
  
  // Next month days (first few days of February)
  for (let i = 1; i <= 7; i++) {
    days.push({ day: i, isCurrentMonth: false, posts: [] });
  }
  
  return days;
};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ContentCalendar = () => {
  const [currentMonth] = useState("January 2025");
  const calendarDays = generateCalendarDays();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Content Calendar</h1>
            <p className="text-muted-foreground">Plan and schedule your Facebook posts</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Schedule Post
          </Button>
        </div>

        {/* Calendar Card */}
        <div className="card-elevated p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h2 className="text-xl font-semibold text-foreground">{currentMonth}</h2>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Today</Button>
              <Button variant="outline" size="sm">Week</Button>
              <Button variant="default" size="sm">Month</Button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
            <span className="text-sm text-muted-foreground">Post Types:</span>
            <div className="flex gap-3">
              <span className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span className="text-xs text-muted-foreground">Health Tip</span>
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs text-muted-foreground">Promotion</span>
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-xs text-muted-foreground">Awareness</span>
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
                <span className="text-xs text-muted-foreground">General</span>
              </span>
            </div>
          </div>

          {/* Week Days Header */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {weekDays.map((day) => (
              <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((dayData, index) => (
              <div
                key={index}
                className={cn(
                  "min-h-28 p-2 rounded-lg border transition-colors",
                  dayData.isCurrentMonth 
                    ? "bg-card border-border hover:border-primary/30" 
                    : "bg-muted/30 border-transparent",
                  dayData.isToday && "ring-2 ring-primary ring-offset-2"
                )}
              >
                <div className={cn(
                  "text-sm font-medium mb-1",
                  dayData.isCurrentMonth ? "text-foreground" : "text-muted-foreground",
                  dayData.isToday && "text-primary"
                )}>
                  {dayData.day}
                </div>
                <div className="space-y-1">
                  {dayData.posts.slice(0, 2).map((post) => (
                    <div
                      key={post.id}
                      className={cn(
                        "px-1.5 py-0.5 rounded text-xs font-medium truncate border cursor-pointer hover:opacity-80 transition-opacity",
                        typeColors[post.type]
                      )}
                      title={post.title}
                    >
                      {post.title}
                    </div>
                  ))}
                  {dayData.posts.length > 2 && (
                    <div className="text-xs text-muted-foreground pl-1">
                      +{dayData.posts.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Posts List */}
        <div className="card-elevated p-6">
          <h3 className="font-semibold text-foreground mb-4">Upcoming This Week</h3>
          <div className="space-y-3">
            {[
              { title: "Winter Health Tips", date: "Today", time: "2:00 PM", type: "health-tip" as const },
              { title: "Free BP Check Event", date: "Tomorrow", time: "10:00 AM", type: "promotion" as const },
              { title: "Vitamin D Awareness", date: "Tomorrow", time: "4:00 PM", type: "awareness" as const },
              { title: "Diabetes Month Campaign", date: "Jan 10", time: "9:00 AM", type: "awareness" as const },
            ].map((post, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-2 h-10 rounded-full",
                    post.type === "health-tip" && "bg-secondary",
                    post.type === "promotion" && "bg-primary",
                    post.type === "awareness" && "bg-accent"
                  )} />
                  <div>
                    <p className="font-medium text-foreground">{post.title}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {post.date}
                      <Clock className="w-3.5 h-3.5 ml-2" />
                      {post.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Eye className="w-4 h-4" />
                    Preview
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContentCalendar;
