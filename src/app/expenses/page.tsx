import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseTable } from "@/components/expenses/expense-table";

export default function ExpensesPage() {
    return (
        <div className="space-y-4">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-headline font-bold tracking-tight">Expenses</h1>
                    <p className="text-muted-foreground">Track and manage your spending.</p>
                </div>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Expense
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Your Expenses</CardTitle>
                    <CardDescription>A list of your recent expenses.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ExpenseTable />
                </CardContent>
            </Card>
        </div>
    );
}
