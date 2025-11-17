import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

export default function Assets() {
  const assets = [
    {
      id: "1",
      name: "Customer Support AI Persona",
      type: "Persona",
      version: "2.1",
      owner: "Sarah Chen",
      score: 92,
      license: "Enterprise",
      updated: "2 hours ago",
    },
    {
      id: "2",
      name: "Marketing Copy Generator",
      type: "Prompt",
      version: "1.5",
      owner: "Mike Johnson",
      score: 88,
      license: "Open",
      updated: "5 hours ago",
    },
    {
      id: "3",
      name: "Data Analysis Workflow",
      type: "Workflow",
      version: "3.0",
      owner: "Alex Kim",
      score: 95,
      license: "Paid",
      updated: "1 day ago",
    },
  ];

  return (
    <DashboardLayout
      title="Assets"
      actions={
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link to="/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Asset
          </Link>
        </Button>
      }
    >
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>License</TableHead>
                <TableHead>Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell>
                    <Link 
                      to={`/assets/${asset.id}`}
                      className="font-medium hover:text-accent transition-colors"
                    >
                      {asset.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{asset.type}</Badge>
                  </TableCell>
                  <TableCell>{asset.version}</TableCell>
                  <TableCell>{asset.owner}</TableCell>
                  <TableCell>
                    <span className="font-semibold text-accent">{asset.score}%</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={asset.license === "Open" ? "default" : "outline"}>
                      {asset.license}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{asset.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
