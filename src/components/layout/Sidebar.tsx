import { 
  LayoutDashboard, 
  Calendar, 
  Sparkles, 
  Shield, 
  BarChart3, 
  Settings, 
  Users, 
  FileText,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: string | number;
}

const mainNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Sparkles, label: "AI Draft Center", href: "/drafts", badge: "3" },
  { icon: Calendar, label: "Content Calendar", href: "/calendar" },
  { icon: Shield, label: "Compliance Queue", href: "/compliance", badge: "5" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
];

const settingsNavItems: NavItem[] = [
  { icon: Settings, label: "AI Rules & Settings", href: "/settings" },
  { icon: Users, label: "Team & Permissions", href: "/team" },
  { icon: FileText, label: "Audit Logs", href: "/logs" },
];

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-sidebar-foreground text-lg">PharmaSocial</h1>
            <p className="text-xs text-sidebar-foreground/60">AI Agent Platform</p>
          </div>
        </Link>
      </div>

      {/* Pharmacy Selector */}
      <div className="px-4 py-3 border-b border-sidebar-border">
        <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-sidebar-accent text-sidebar-foreground hover:bg-sidebar-accent/80 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">MH</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">MedHealth Pharmacy</p>
              <p className="text-xs text-sidebar-foreground/60">Main Branch</p>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-sidebar-foreground/60" />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto scrollbar-thin">
        <p className="px-3 py-2 text-xs font-medium text-sidebar-foreground/50 uppercase tracking-wider">Main</p>
        {mainNavItems.map((item) => {
          const isActive = currentPath === item.href;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn("nav-item", isActive && "nav-item-active")}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div className="pt-4">
          <p className="px-3 py-2 text-xs font-medium text-sidebar-foreground/50 uppercase tracking-wider">Settings</p>
          {settingsNavItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn("nav-item", isActive && "nav-item-active")}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <Link to="/help" className={cn("nav-item", currentPath === "/help" && "nav-item-active")}>
          <HelpCircle className="w-5 h-5" />
          <span>Help & Support</span>
        </Link>
        <div className="flex items-center gap-3 px-3 py-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-xs font-semibold text-white">SA</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-sidebar-foreground">Sarah Ahmed</p>
            <p className="text-xs text-sidebar-foreground/60">Pharmacy Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
