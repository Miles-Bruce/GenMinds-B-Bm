import { useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Play } from "lucide-react";

export default function AssetDetails() {
  const { id } = useParams();

  return (
    <DashboardLayout
      title="Customer Support AI Persona"
      subtitle="Persona • v2.1"
      actions={
        <>
          <Button variant="outline">
            <Copy className="mr-2 h-4 w-4" />
            Clone
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Play className="mr-2 h-4 w-4" />
            Run Benchmark
          </Button>
        </>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Description</label>
                <p className="mt-1">
                  Advanced customer support AI trained on enterprise support data with empathetic response patterns and escalation protocols.
                </p>
              </div>
              <div className="flex gap-2">
                <Badge>Support</Badge>
                <Badge>Enterprise</Badge>
                <Badge>v2.1</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">System Prompt</label>
                <div className="mt-2 p-4 bg-secondary rounded-lg font-mono text-sm">
                  You are a highly trained customer support specialist...
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Benchmark</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">92%</div>
                <p className="text-sm text-muted-foreground">Latest Score</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>License</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="mb-2">Enterprise</Badge>
              <p className="text-sm text-muted-foreground">
                Available for enterprise licensing
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
