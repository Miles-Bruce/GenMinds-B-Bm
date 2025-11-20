/**
 * GenMinds - Enterprise Intelligence Asset Management Platform
 * Assets Page: Browse and manage AI intelligence assets
 * Displays prompts, personas, workflows, and blueprints with backend integration
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// GenMinds Backend API for Intelligence Asset Management
const API_BASE = "https://api-backend-dot-trans-proposal-441718-c9.ew.r.appspot.com";

interface IntelligenceAsset {
  id: string | number;
  name: string;
  type: string;
  version?: string;
  owner?: string;
  score?: number;
  license?: string;
  updated?: string;
}

export default function Assets() {
  const [assets, setAssets] = useState<IntelligenceAsset[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch intelligence assets from GenMinds backend API
  useEffect(() => {
    fetch(`${API_BASE}/api/assets`)
      .then(res => res.json())
      .then(data => {
        console.log("GenMinds Intelligence Assets loaded:", data);
        if (data.assets) {
          setAssets(data.assets);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load GenMinds intelligence assets:", err);
        setLoading(false);
      });
  }, []);

  return (
    <DashboardLayout
      title="Intelligence Assets"
      subtitle="Browse and manage AI intelligence assets (Prompts, Personas, Workflows, Blueprints)"
      actions={
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link to="/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Intelligence Asset
          </Link>
        </Button>
      }
    >
      <Card>
        <CardHeader>
          <CardTitle>Intelligence Assets Database</CardTitle>
          <p className="text-xs text-muted-foreground">
            Live data from GenMinds Backend API - Enterprise Intelligence Asset Management
          </p>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">
              Loading intelligence assets from GenMinds backend...
            </div>
          ) : assets.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Intelligence Asset Name</TableHead>
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
                      <Badge variant="secondary">{asset.type || "Intelligence Asset"}</Badge>
                    </TableCell>
                    <TableCell>{asset.version || "1.0.0"}</TableCell>
                    <TableCell>{asset.owner || "GenMinds"}</TableCell>
                    <TableCell>
                      <span className="font-semibold text-accent">{asset.score || 85}%</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={asset.license === "Open" ? "default" : "outline"}>
                        {asset.license || "Open"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{asset.updated || "Recent"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              No intelligence assets found in GenMinds database
            </div>
          )}
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
