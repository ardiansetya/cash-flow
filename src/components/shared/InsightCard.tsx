import { ArrowLeftRight, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { toRupiah } from "~/lib/toRupiah";

const insightData = [
  {
    title: "Total Balance",
    icon: Wallet,
    value: 4380000,
    description: "Across all accounts",
  },
  {
    title: "Income",
    icon: TrendingUp,
    value: 4000000,
    description: "This month",
  },
  {
    title: "Expense",
    icon: TrendingDown,
    value: 808000,
    description: "This month",
  },
  {
    title: "Transactions",
    icon: ArrowLeftRight,
    value: 808000,
    description: "This month",
  },
];

const InsightCard = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {insightData.map((i) => (
        <Card key={i.title} className="flex-1">
          <CardContent>
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm font-semibold">
                  {i.title}
                </p>
                <p className="text-xl font-bold">{toRupiah(i.value)}</p>
                <p className="text-muted-foreground text-xs">{i.description}</p>
              </div>

              <i.icon className="text-muted-foreground" />

            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InsightCard;
