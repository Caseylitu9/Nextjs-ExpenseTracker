import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IncomeTable } from "@/components/income/income-table";

export default function IncomePage() {
    return (
        <div className="space-y-4">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-headline font-bold tracking-tight">Income</h1>
                    <p className="text-muted-foreground">Track and manage your earnings.</p>
                </div>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Income
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Your Income</CardTitle>
                    <CardDescription>A list of your recent income sources.</CardDescription>
                </CardHeader>
                <CardContent>
                    <IncomeTable />
                </CardContent>
            </Card>
        </div>
    );
}
