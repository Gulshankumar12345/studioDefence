import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Admin Dashboard</h1>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <ShieldCheck className="w-8 h-8 text-accent" />
          <CardTitle>Welcome, Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            You have successfully logged in to the secure admin panel.
          </p>
          <p className="text-muted-foreground mt-2">
            This area is protected and only accessible to authenticated users. You can add more admin-specific pages and components here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
