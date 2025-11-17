import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, TrendingUp, Briefcase, Activity } from "lucide-react";

export default function Dashboard() {
  const metrics = [
    { title: "Total Assets", value: "247", icon: Layers, trend: "+12%" },
    { title: "Evaluations", value: "1,834", icon: Activity, trend: "+24%" },
    { title: "Portfolios", value: "32", icon: Briefcase, trend: "+8%" },
    { title: "Avg. Performance", value: "87.2%", icon: TrendingUp, trend: "+5%" },
  ];

  const recentAssets = [
    { name: "Customer Support Persona v2.1", type: "Persona", updated: "2 hours ago" },
    { name: "Marketing Copy Generator", type: "Prompt", updated: "5 hours ago" },
    { name: "Data Analysis Workflow", type: "Workflow", updated: "1 day ago" },
  ];

  return (
    <DashboardLayout title="Dashboard" subtitle="Enterprise Intelligence Asset Platform">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-accent mt-1">{metric.trend}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recently Updated Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAssets.map((asset, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium text-sm">{asset.name}</p>
                    <p className="text-xs text-muted-foreground">{asset.type}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{asset.updated}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Model Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>GPT-4</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "92%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Claude 3</span>
                  <span className="font-medium">88%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "88%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Gemini</span>
                  <span className="font-medium">84%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "84%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
