"use client";

import { Cell, Pie, PieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
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
      <ChartContainer config={chartConfig} className="h-[120px] w-[500px]">
        <PieChart width={500} height={500} accessibilityLayer data={data}>
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            innerRadius={35}
            outerRadius={60}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>

          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
    </Card>
  );
}
