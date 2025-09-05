import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const transactions = [
    { type: 'Income', category: 'Salary', date: '2023-10-01', amount: 390000.00 },
    { type: 'Expense', category: 'Groceries', date: '2023-10-02', amount: -9815.00 },
    { type: 'Expense', category: 'Utilities', date: '2023-10-03', amount: -15600.00 },
    { type: 'Expense', category: 'Transport', date: '2023-10-04', amount: -5499.00 },
    { type: 'Income', category: 'Freelance', date: '2023-10-05', amount: 58500.00 },
];

export function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction, index) => (
          <TableRow key={index}>
            <TableCell>
              <Badge variant={transaction.type === 'Income' ? 'default' : 'secondary'}
               className={transaction.type === 'Income' ? 'bg-green-500/20 text-green-700 hover:bg-green-500/30' : 'bg-red-500/20 text-red-700 hover:bg-red-500/30'}>
                {transaction.type}
              </Badge>
            </TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell className={`text-right font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {transaction.amount.toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
