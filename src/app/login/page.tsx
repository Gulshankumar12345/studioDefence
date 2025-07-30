'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle authentication here.
    // For this demo, we'll just redirect to a conceptual admin dashboard.
    alert('Login functionality is for demonstration only.');
    router.push('/');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary p-4">
      <div className="absolute top-4 left-4">
          <Button asChild variant="ghost">
              <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
              </Link>
          </Button>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary" />
            </div>
          <CardTitle className="font-headline">Admin Panel</CardTitle>
          <CardDescription>Enter credentials to access the secure area.</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="chandan@nilkanarms.in" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
            </div>
            </CardContent>
            <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Secure Login
            </Button>
            </CardFooter>
        </form>
      </Card>
    </div>
  );
}