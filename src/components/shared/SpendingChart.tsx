"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import {
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import { getSpendingByCategory } from "~/lib/mockData";
import { Card, CardHeader } from "../ui/card";

const data = getSpendingByCategory();


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function SpendingChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Spending Category</h1>
          <p className="text-muted-foreground text-xs">Tanggal</p>
        </div>
      </CardHeader>
      <div className="size-40">
        <ResponsiveContainer width="100%" height="100%" className="">
          <PieChart accessibilityLayer data={data}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={75}
              paddingAngle={2}
              dataKey="value"
              fill="var(--color-desktop)"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
