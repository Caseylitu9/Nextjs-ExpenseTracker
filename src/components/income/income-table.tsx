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

const mockIncome = [
    { id: '1', source: 'Salary', date: '2024-05-01', amount: 455000.00 },
    { id: '2', source: 'Freelance Project', date: '2024-05-10', amount: 97565.00 },
    { id: '3', source: 'Stock Dividend', date: '2024-05-15', amount: 16347.50 },
    { id: '4', source: 'Etsy Sales', date: '2024-05-20', amount: 41600.00 },
];

export function IncomeTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Source</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead><span className="sr-only">Actions</span></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockIncome.map((income) => (
          <TableRow key={income.id}>
            <TableCell className="font-medium">{income.source}</TableCell>
            <TableCell>{income.date}</TableCell>
            <TableCell className="text-right">
                {income.amount.toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}
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
