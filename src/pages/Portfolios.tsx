/**
 * GenMinds - Enterprise Intelligence Asset Management Platform  
 * Portfolios: Manage collections of intelligence assets
 * Create and license portfolios of AI intelligence assets
 */

import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Folder } from "lucide-react";

export default function Portfolios() {
  const portfolios = [
    {
      id: "1",
      title: "Enterprise Support Intelligence Suite",
      owner: "Sarah Chen",
      assets: 12,
      license: "Enterprise",
    },
    {
      id: "2",
      title: "Marketing AI Intelligence Pack",
      owner: "Mike Johnson",
      assets: 8,
      license: "Paid",
    },
    {
      id: "3",
      title: "Developer Intelligence Tools Collection",
      owner: "Alex Kim",
      assets: 15,
      license: "Open",
    },
  ];

  return (
    <DashboardLayout
      title="Asset Portfolios"
      subtitle="Manage collections of GenMinds intelligence assets"
      actions={
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Plus className="mr-2 h-4 w-4" />
          New Portfolio
        </Button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <Card key={portfolio.id} className="hover:border-accent transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Folder className="h-5 w-5 text-accent" />
                </div>
                <Badge variant="outline">{portfolio.license}</Badge>
              </div>
              <CardTitle className="text-lg">{portfolio.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{portfolio.owner}</span>
                <span className="font-medium">{portfolio.assets} intelligence assets</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
