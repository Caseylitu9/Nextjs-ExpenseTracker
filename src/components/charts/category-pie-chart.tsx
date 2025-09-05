'use client'

import * as React from "react"
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { category: "Groceries", amount: 450, fill: "var(--color-groceries)" },
  { category: "Transport", amount: 200, fill: "var(--color-transport)" },
  { category: "Housing", amount: 850, fill: "var(--color-housing)" },
  { category: "Utilities", amount: 150, fill: "var(--color-utilities)" },
  { category: "Entertainment", amount: 120, fill: "var(--color-entertainment)" },
]

const chartConfig = {
  amount: {
    label: "Amount",
  },
  groceries: {
    label: "Groceries",
    color: "hsl(var(--chart-1))",
  },
  transport: {
    label: "Transport",
    color: "hsl(var(--chart-2))",
  },
  housing: {
    label: "Housing",
    color: "hsl(var(--chart-3))",
  },
  utilities: {
    label: "Utilities",
    color: "hsl(var(--chart-4))",
  },
  entertainment: {
    label: "Entertainment",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function CategoryPieChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-[250px]"
    >
      <ResponsiveContainer>
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="category"
            innerRadius={60}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
