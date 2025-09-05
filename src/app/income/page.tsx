
'use client';

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IncomeTable, Income } from "@/components/income/income-table";
import { AddIncomeDialog } from "@/components/income/add-income-dialog";

const mockIncome: Income[] = [
    { id: '1', source: 'Salary', date: '2024-05-01', amount: 455000.00 },
    { id: '2', source: 'Freelance Project', date: '2024-05-10', amount: 97565.00 },
    { id: '3', source: 'Stock Dividend', date: '2024-05-15', amount: 16347.50 },
    { id: '4', source: 'Etsy Sales', date: '2024-05-20', amount: 41600.00 },
];

export default function IncomePage() {
    const [income, setIncome] = useState<Income[]>(mockIncome);

    const addIncome = (newIncome: Omit<Income, 'id'>) => {
        setIncome(prev => [...prev, { ...newIncome, id: (prev.length + 1).toString() }]);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-headline font-bold tracking-tight">Income</h1>
                    <p className="text-muted-foreground">Track and manage your earnings.</p>
                </div>
                <AddIncomeDialog onAddIncome={addIncome}>
                     <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Income
                    </Button>
                </AddIncomeDialog>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Your Income</CardTitle>
                    <CardDescription>A list of your recent income sources.</CardDescription>
                </CardHeader>
                <CardContent>
                    <IncomeTable income={income} />
                </CardContent>
            </Card>
        </div>
    );
}
