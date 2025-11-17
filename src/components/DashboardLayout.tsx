import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Layers, 
  Briefcase, 
  TrendingUp, 
  Users, 
  FileText, 
  Folders, 
  BarChart3, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Dashboard", route: "/dashboard", icon: LayoutDashboard },
  { label: "Assets", route: "/assets", icon: Layers },
  { label: "Portfolios", route: "/portfolios", icon: Briefcase },
  { label: "Benchmarks", route: "/benchmarks", icon: TrendingUp },
  { label: "AI Personas", route: "/personas", icon: Users },
  { label: "Licensing", route: "/licensing", icon: FileText },
  { label: "Workspaces", route: "/workspaces", icon: Folders },
  { label: "Analytics", route: "/analytics", icon: BarChart3 },
  { label: "Settings", route: "/settings", icon: Settings },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export default function DashboardLayout({ children, title, subtitle, actions }: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-[hsl(var(--sidebar-background))] text-[hsl(var(--sidebar-foreground))] flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">GenMinds</h1>
          <p className="text-xs text-white/70 mt-1">Enterprise Intelligence Platform</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.route;
            
            return (
              <Link
                key={item.route}
                to={item.route}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
                  isActive 
                    ? "bg-[hsl(var(--sidebar-accent))] text-[hsl(var(--accent-foreground))]" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        {(title || actions) && (
          <header className="border-b border-border bg-card px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                {title && <h2 className="text-2xl font-bold text-foreground">{title}</h2>}
                {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
              </div>
              {actions && <div className="flex gap-3">{actions}</div>}
            </div>
          </header>
        )}

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
