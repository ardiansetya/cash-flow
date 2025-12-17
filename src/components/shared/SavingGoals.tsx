import { Laptop } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import BudgetProgress from "./ProgressBudget";

const SavingGoals = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <h3 className="font-bold">Saving Goals</h3>
          <Link href={"/transactions"} className="text-primary text-sm">
            View all
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        <div className="hover:bg-accent w-full rounded-xl p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Laptop />
              <div>
                <p className="text-sm font-semibold">Food And Drinks</p>
                <p className="text-muted-foreground text-sm">Due Dec 10</p>
              </div>
            </div>
            <p className="text-muted-foreground">64%</p>
          </div>
          <BudgetProgress />
        </div>
      </CardContent>
    </Card>
  );
};

export default SavingGoals;
