import DashboardLayout from "@/components/DashboardLayout";
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

export default function Licensing() {
  const licenses = [
    { title: "Customer Support Suite", license: "Enterprise", price: "$999/mo" },
    { title: "Marketing Pack", license: "Paid", price: "$299/mo" },
    { title: "Developer Tools", license: "Open", price: "Free" },
  ];

  return (
    <DashboardLayout title="Licensing">
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>License</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {licenses.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>
                    <Badge variant={item.license === "Open" ? "default" : "outline"}>
                      {item.license}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
