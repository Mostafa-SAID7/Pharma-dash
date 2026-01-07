import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Plus, 
  Shield, 
  Mail, 
  MoreHorizontal,
  Crown,
  Stethoscope,
  Megaphone,
  Edit3,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "owner" | "admin" | "pharmacist" | "marketing" | "editor" | "viewer";
  avatar: string;
  status: "active" | "pending";
  lastActive: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Ahmad Hassan",
    email: "ahmad.hassan@medhealth.com",
    role: "owner",
    avatar: "AH",
    status: "active",
    lastActive: "Now"
  },
  {
    id: "2",
    name: "Sarah Ahmed",
    email: "sarah.ahmed@medhealth.com",
    role: "admin",
    avatar: "SA",
    status: "active",
    lastActive: "2 hours ago"
  },
  {
    id: "3",
    name: "Dr. Fatima Al-Rashid",
    email: "fatima.alrashid@medhealth.com",
    role: "pharmacist",
    avatar: "FA",
    status: "active",
    lastActive: "1 day ago"
  },
  {
    id: "4",
    name: "Omar Khalil",
    email: "omar.khalil@medhealth.com",
    role: "marketing",
    avatar: "OK",
    status: "active",
    lastActive: "3 hours ago"
  },
  {
    id: "5",
    name: "Layla Mansour",
    email: "layla.mansour@medhealth.com",
    role: "editor",
    avatar: "LM",
    status: "active",
    lastActive: "5 hours ago"
  },
  {
    id: "6",
    name: "Pending Invitation",
    email: "new.member@medhealth.com",
    role: "viewer",
    avatar: "?",
    status: "pending",
    lastActive: "Invited 2 days ago"
  }
];

const roleConfig = {
  owner: {
    label: "System Owner",
    icon: Crown,
    color: "bg-warning/10 text-warning border-warning/20",
    description: "Full system control, billing & configuration"
  },
  admin: {
    label: "Pharmacy Admin",
    icon: Shield,
    color: "bg-primary/10 text-primary border-primary/20",
    description: "Approves content, manages integrations"
  },
  pharmacist: {
    label: "Licensed Pharmacist",
    icon: Stethoscope,
    color: "bg-secondary/10 text-secondary border-secondary/20",
    description: "Medical compliance approval"
  },
  marketing: {
    label: "Marketing Manager",
    icon: Megaphone,
    color: "bg-accent/10 text-accent border-accent/20",
    description: "Campaign creation & analytics"
  },
  editor: {
    label: "Content Editor",
    icon: Edit3,
    color: "bg-muted text-muted-foreground border-border",
    description: "Draft editing & template management"
  },
  viewer: {
    label: "Viewer",
    icon: Eye,
    color: "bg-muted text-muted-foreground border-border",
    description: "Read-only access to reports"
  }
};

const TeamPermissions = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Team & Permissions</h1>
            <p className="text-muted-foreground">Manage team members and their access levels</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Invite Member
          </Button>
        </div>

        {/* Role Overview Cards */}
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(roleConfig).slice(0, 3).map(([key, config]) => {
            const Icon = config.icon;
            const count = teamMembers.filter(m => m.role === key).length;
            return (
              <div key={key} className="card-elevated p-4">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", config.color)}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{config.label}</p>
                    <p className="text-sm text-muted-foreground">{count} member{count !== 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Members Table */}
        <div className="card-elevated">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Team Members</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Member</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Last Active</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => {
                  const role = roleConfig[member.role];
                  const RoleIcon = role.icon;
                  
                  return (
                    <tr key={member.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold",
                            member.status === "pending" 
                              ? "bg-muted text-muted-foreground"
                              : "bg-gradient-to-br from-primary to-secondary text-white"
                          )}>
                            {member.avatar}
                          </div>
                          <div>
                            <p className={cn(
                              "font-medium",
                              member.status === "pending" ? "text-muted-foreground" : "text-foreground"
                            )}>
                              {member.name}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {member.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className={cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                          role.color
                        )}>
                          <RoleIcon className="w-3.5 h-3.5" />
                          {role.label}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={cn(
                          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium",
                          member.status === "active" 
                            ? "bg-secondary/10 text-secondary"
                            : "bg-warning/10 text-warning"
                        )}>
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            member.status === "active" ? "bg-secondary" : "bg-warning"
                          )} />
                          {member.status === "active" ? "Active" : "Pending"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">
                        {member.lastActive}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Permissions Matrix */}
        <div className="card-elevated p-6">
          <h3 className="font-semibold text-foreground mb-4">Permissions Overview</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-medium text-muted-foreground">Permission</th>
                  <th className="text-center py-2 px-3 font-medium text-muted-foreground">Owner</th>
                  <th className="text-center py-2 px-3 font-medium text-muted-foreground">Admin</th>
                  <th className="text-center py-2 px-3 font-medium text-muted-foreground">Pharmacist</th>
                  <th className="text-center py-2 px-3 font-medium text-muted-foreground">Marketing</th>
                  <th className="text-center py-2 px-3 font-medium text-muted-foreground">Editor</th>
                  <th className="text-center py-2 px-3 font-medium text-muted-foreground">Viewer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Manage billing & system", true, false, false, false, false, false],
                  ["Configure AI rules", true, true, false, false, false, false],
                  ["Approve medical content", true, true, true, false, false, false],
                  ["Create & schedule posts", true, true, false, true, true, false],
                  ["View analytics", true, true, true, true, true, true],
                  ["Manage team members", true, true, false, false, false, false],
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-3 px-3 text-foreground">{row[0]}</td>
                    {row.slice(1).map((allowed, i) => (
                      <td key={i} className="text-center py-3 px-3">
                        {allowed ? (
                          <span className="text-secondary">✓</span>
                        ) : (
                          <span className="text-muted-foreground/50">—</span>
                        )}
                      </td>
                    ))}
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

export default TeamPermissions;
