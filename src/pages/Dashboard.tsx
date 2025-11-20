/**
 * GenMinds - Enterprise Intelligence Asset Management Platform
 * Dashboard: Overview of intelligence assets, benchmarks, and analytics
 * Displays metrics for AI prompts, personas, workflows, and model performance
 */

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, TrendingUp, Briefcase, Activity } from "lucide-react";

// Backend API URL for GenMinds Intelligence Asset Management
const API_BASE = "https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com";

interface Asset {
  id: string;
  name: string;
  type: string;
  updatedAt?: string;
}

export default function Dashboard() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch intelligence assets from GenMinds backend API
  useEffect(() => {
    fetch(`${API_BASE}/api/assets`)
      .then(res => res.json())
      .then(data => {
        if (data.assets) {
          setAssets(data.assets.slice(0, 3)); // Show 3 most recent
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch GenMinds intelligence assets:", err);
        setLoading(false);
      });
  }, []);

  const metrics = [
    { title: "Total Intelligence Assets", value: assets.length.toString(), icon: Layers, trend: "+12%" },
    { title: "Benchmark Evaluations", value: "1,834", icon: Activity, trend: "+24%" },
    { title: "Asset Portfolios", value: "32", icon: Briefcase, trend: "+8%" },
    { title: "Avg. AI Performance", value: "87.2%", icon: TrendingUp, trend: "+5%" },
  ];

  return (
    <DashboardLayout 
      title="Intelligence Asset Dashboard" 
      subtitle="GenMinds Enterprise Intelligence Asset Management Platform"
    >
      {/* Intelligence Asset Metrics */}
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

      {/* Live Intelligence Assets from Backend API */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Intelligence Assets</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">
              Live data from GenMinds Backend API
            </p>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading intelligence assets...</p>
            ) : assets.length > 0 ? (
              <div className="space-y-4">
                {assets.map((asset, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <p className="font-medium text-sm">{asset.name}</p>
                      <p className="text-xs text-muted-foreground">{asset.type || "Intelligence Asset"}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {asset.updatedAt || "Recently updated"}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No assets found</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Model Benchmarks</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">
              Performance comparison across intelligence assets
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>GPT-4 (Intelligence Assets)</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "92%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Claude 3 (Intelligence Assets)</span>
                  <span className="font-medium">88%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "88%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Gemini (Intelligence Assets)</span>
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
