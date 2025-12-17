import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import BudgetProgress from "./ProgressBudget";

const BudgetOverview = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <h3 className="font-bold">Budget Overview</h3>
          <Link href={"/transactions"} className="text-primary text-sm">
            Manage
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        <div className="hover:bg-accent w-full rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold">Food And Drinks</p>
            <p className="text-xs text-muted-foreground">Rp 584.000 / Rp 800000</p>
          </div>
          <BudgetProgress />
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetOverview;
