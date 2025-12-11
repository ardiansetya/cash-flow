import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ForkKnifeCrossed } from "lucide-react";
import { Button } from "../ui/button";

const RecentsTransactions = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <h3 className="font-bold">Recent Trasnactions</h3>
          <Link href={"/transactions"} className="text-primary text-sm">
            View all
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        <div className="hover:bg-accent flex w-full justify-between items-center rounded-xl p-4">
          <div className="flex items-center gap-6">
            <ForkKnifeCrossed />
            <div>
              <p className="font-bold">Food And Drinks</p>
              <p className="text-xs text-muted-foreground">Cash Dec 10</p>
            </div>
          </div>

          <p className="text-sm font-semibold">- Rp 10.000</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentsTransactions;
