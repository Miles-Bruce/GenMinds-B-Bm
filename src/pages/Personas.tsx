import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

export default function Personas() {
  const personas = [
    { name: "Customer Support Specialist", industry: "Support", score: 92 },
    { name: "Marketing Content Writer", industry: "Marketing", score: 88 },
    { name: "Technical Documentation Expert", industry: "DevTools", score: 90 },
  ];

  return (
    <DashboardLayout title="AI Personas">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personas.map((persona, i) => (
          <Card key={i} className="hover:border-accent transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <Badge variant="secondary">{persona.industry}</Badge>
              </div>
              <CardTitle className="text-lg">{persona.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Performance</span>
                <span className="text-lg font-bold text-accent">{persona.score}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
