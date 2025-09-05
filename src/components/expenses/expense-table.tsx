'use client';

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const mockExpenses = [
    { id: '1', description: 'Trader Joe\'s Haul', category: 'Groceries', date: '2024-05-15', amount: 16192.80 },
    { id: '2', description: 'Monthly Subway Pass', category: 'Transport', date: '2024-05-01', amount: 16510.00 },
    { id: '3', description: 'Electric Bill', category: 'Utilities', date: '2024-05-10', amount: 11557.00 },
    { id: '4', description: 'Movie Night', category: 'Entertainment', date: '2024-05-12', amount: 5850.00 },
    { id: '5', description: 'Rent May', category: 'Housing', date: '2024-05-01', amount: 195000.00 },
];

const categoryColors: { [key: string]: string } = {
    Groceries: 'bg-blue-100 text-blue-800',
    Transport: 'bg-yellow-100 text-yellow-800',
    Utilities: 'bg-purple-100 text-purple-800',
    Entertainment: 'bg-pink-100 text-pink-800',
    Housing: 'bg-gray-200 text-gray-800'
}

export function ExpenseTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead><span className="sr-only">Actions</span></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockExpenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell className="font-medium">{expense.description}</TableCell>
            <TableCell>
                <Badge className={categoryColors[expense.category] || 'bg-gray-100 text-gray-800'}>
                    {expense.category}
                </Badge>
            </TableCell>
            <TableCell>{expense.date}</TableCell>
            <TableCell className="text-right">
                {expense.amount.toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}
            </TableCell>
             <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
