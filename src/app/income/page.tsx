
'use client';

import { useState, useEffect } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IncomeTable, Income } from "@/components/income/income-table";
import { AddIncomeDialog } from "@/components/income/add-income-dialog";

export default function IncomePage() {
    const [income, setIncome] = useState<Income[]>([]);

    const fetchIncome = async () => {
        const response = await fetch('/api/income');
        const data = await response.json();
        setIncome(data);
    };

    useEffect(() => {
        fetchIncome();
    }, []);

    const addIncome = async (newIncome: Omit<Income, 'id'>) => {
        await fetch('/api/income', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newIncome),
        });
        fetchIncome(); // Refetch income after adding
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
