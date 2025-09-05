'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', income: 520000, expenses: 312000 },
  { name: 'Feb', income: 390000, expenses: 181740 },
  { name: 'Mar', income: 260000, expenses: 1274000 },
  { name: 'Apr', income: 361400, expenses: 508040 },
  { name: 'May', income: 245700, expenses: 624000 },
  { name: 'Jun', income: 310700, expenses: 494000 },
  { name: 'Jul', income: 453700, expenses: 559000 },
  { name: 'Aug', income: 453700, expenses: 559000 },
  { name: 'Sep', income: 361400, expenses: 508040 },
  { name: 'Oct', income: 245700, expenses: 624000 },
  { name: 'Nov', income: 310700, expenses: 494000 },
  { name: 'Dec', income: 453700, expenses: 559000 },
];

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `KSH${value/1000}k`}
        />
        <Tooltip
          cursor={{ fill: 'hsl(var(--muted))' }}
          contentStyle={{ 
            background: 'hsl(var(--background))', 
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
          }}
          formatter={(value: number) => value.toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}
        />
        <Bar dataKey="income" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
