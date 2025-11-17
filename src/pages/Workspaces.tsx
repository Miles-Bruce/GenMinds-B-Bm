import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Folders } from "lucide-react";

export default function Workspaces() {
  const workspaces = [
    { name: "Marketing Team", members: 12 },
    { name: "Product Development", members: 8 },
    { name: "Customer Success", members: 15 },
  ];

  return (
    <DashboardLayout title="Workspaces">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspaces.map((workspace, i) => (
          <Card key={i} className="hover:border-accent transition-colors cursor-pointer">
            <CardHeader>
              <div className="p-2 bg-accent/10 rounded-lg w-fit mb-2">
                <Folders className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-lg">{workspace.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{workspace.members} members</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
