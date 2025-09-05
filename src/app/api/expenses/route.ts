import { type NextRequest, NextResponse } from 'next/server';
import { type Expense } from "@/components/expenses/expense-table";

// In-memory data store
let expenses: Expense[] = [
    { id: '1', description: 'Trader Joe\'s Haul', category: 'Groceries', date: '2024-05-15', amount: 16192.80 },
    { id: '2', description: 'Monthly Subway Pass', category: 'Transport', date: '2024-05-01', amount: 16510.00 },
    { id: '3', description: 'Electric Bill', category: 'Utilities', date: '2024-05-10', amount: 11557.00 },
    { id: '4', description: 'Movie Night', category: 'Entertainment', date: '2024-05-12', amount: 5850.00 },
    { id: '5', description: 'Rent May', category: 'Housing', date: '2024-05-01', amount: 195000.00 },
];

export async function GET() {
  return NextResponse.json(expenses);
}

export async function POST(request: NextRequest) {
  try {
    const newExpense: Omit<Expense, 'id'> = await request.json();
    const expenseWithId: Expense = {
      ...newExpense,
      id: (expenses.length + 1).toString(),
    };
    expenses.push(expenseWithId);
    return NextResponse.json(expenseWithId, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding expense' }, { status: 500 });
  }
}
