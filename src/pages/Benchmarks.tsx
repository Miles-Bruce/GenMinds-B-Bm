/**
 * GenMinds - Enterprise Intelligence Asset Management Platform
 * Benchmarks: AI model performance evaluation and comparison  
 * Compare GPT-4, Claude, Gemini on intelligence assets
 */

import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function Benchmarks() {
  const models = [
    { name: "GPT-4 (Intelligence Assets)", score: 92, tests: 1234 },
    { name: "Claude 3 Opus (Intelligence Assets)", score: 88, tests: 1089 },
    { name: "Gemini Pro (Intelligence Assets)", score: 84, tests: 956 },
    { name: "GPT-3.5 (Intelligence Assets)", score: 78, tests: 2341 },
  ];

  return (
    <DashboardLayout title="AI Model Benchmarks" subtitle="Evaluate AI model performance on GenMinds intelligence assets">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Intelligence Asset Model Performance</CardTitle>
            <p className="text-xs text-muted-foreground mt-1">
              Compare AI model performance across GenMinds intelligence assets
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {models.map((model, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{model.name}</span>
                      <span className="text-sm text-muted-foreground">{model.tests} tests</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent flex items-center justify-end pr-2" 
                        style={{ width: `${model.score}%` }}
                      >
                        <span className="text-xs font-bold text-accent-foreground">
                          {model.score}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Intelligence Asset Performance Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Historical benchmark data for GenMinds intelligence assets and AI model performance trends.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
