
'use client';

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseTable, Expense } from "@/components/expenses/expense-table";
import { AddExpenseDialog } from "@/components/expenses/add-expense-dialog";

const mockExpenses: Expense[] = [
    { id: '1', description: 'Trader Joe\'s Haul', category: 'Groceries', date: '2024-05-15', amount: 16192.80 },
    { id: '2', description: 'Monthly Subway Pass', category: 'Transport', date: '2024-05-01', amount: 16510.00 },
    { id: '3', description: 'Electric Bill', category: 'Utilities', date: '2024-05-10', amount: 11557.00 },
    { id: '4', description: 'Movie Night', category: 'Entertainment', date: '2024-05-12', amount: 5850.00 },
    { id: '5', description: 'Rent May', category: 'Housing', date: '2024-05-01', amount: 195000.00 },
];

export default function ExpensesPage() {
    const [expenses, setExpenses] = useState<Expense[]>(mockExpenses);

    const addExpense = (newExpense: Omit<Expense, 'id'>) => {
        setExpenses(prev => [...prev, { ...newExpense, id: (prev.length + 1).toString() }]);
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
