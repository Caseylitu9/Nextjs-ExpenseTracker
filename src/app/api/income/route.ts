import { type NextRequest, NextResponse } from 'next/server';
import { type Income } from "@/components/income/income-table";

// In-memory data store
let income: Income[] = [
    { id: '1', source: 'Salary', date: '2024-05-01', amount: 455000.00 },
    { id: '2', source: 'Freelance Project', date: '2024-05-10', amount: 97565.00 },
    { id: '3', source: 'Stock Dividend', date: '2024-05-15', amount: 16347.50 },
    { id: '4', source: 'Etsy Sales', date: '2024-05-20', amount: 41600.00 },
];

export async function GET() {
  return NextResponse.json(income);
}

export async function POST(request: NextRequest) {
  try {
    const newIncome: Omit<Income, 'id'> = await request.json();
    const incomeWithId: Income = {
      ...newIncome,
      id: (income.length + 1).toString(),
    };
    income.push(incomeWithId);
    return NextResponse.json(incomeWithId, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding income' }, { status: 500 });
  }
}
