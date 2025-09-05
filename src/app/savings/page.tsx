import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const savingsGoals = [
    { name: 'New Car Fund', target: 2600000, current: 1950000, deadline: 'Dec 2024' },
    { name: 'Vacation to Japan', target: 1040000, current: 416000, deadline: 'Jun 2025' },
    { name: 'Emergency Fund', target: 1300000, current: 1300000, deadline: 'Ongoing' },
    { name: 'New Laptop', target: 234000, current: 117000, deadline: 'Sep 2024' },
];

export default function SavingsPage() {
    return (
        <div className="space-y-4">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-headline font-bold tracking-tight">Savings Goals</h1>
                    <p className="text-muted-foreground">Set and track your financial goals.</p>
                </div>
                 <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Goal
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {savingsGoals.map((goal, index) => {
                    const progress = (goal.current / goal.target) * 100;
                    return (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{goal.name}</CardTitle>
                                <CardDescription>Deadline: {goal.deadline}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Progress value={progress} />
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>{goal.current.toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}</span>
                                    <span>{goal.target.toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <p className="text-sm font-medium">{Math.round(progress)}% Complete</p>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
