
'use client';

import { useState, useEffect } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseTable, Expense } from "@/components/expenses/expense-table";
import { AddExpenseDialog } from "@/components/expenses/add-expense-dialog";

export default function ExpensesPage() {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const fetchExpenses = async () => {
        const response = await fetch('/api/expenses');
        const data = await response.json();
        setExpenses(data);
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const addExpense = async (newExpense: Omit<Expense, 'id'>) => {
        await fetch('/api/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newExpense),
        });
        fetchExpenses(); // Refetch expenses after adding
    };

    return (
        <div className="space-y-4">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-headline font-bold tracking-tight">Expenses</h1>
                    <p className="text-muted-foreground">Track and manage your spending.</p>
                </div>
                <AddExpenseDialog onAddExpense={addExpense}>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Expense
                    </Button>
                </AddExpenseDialog>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Your Expenses</CardTitle>
                    <CardDescription>A list of your recent expenses.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ExpenseTable expenses={expenses} />
                </CardContent>
            </Card>
        </div>
    );
}
