import { Wallet } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";

const MyAccountCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <h3 className="font-bold">My Accounts</h3>
          <Link href={"/account"} className="text-primary text-sm">
            Manage
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        {/* nnti dimapping */}
        <div className="flex flex-wrap">
          <div className="hover:bg-accent w-1/2 rounded-xl p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Wallet />
                  Cash
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">Rp 10.000.000</p>
                  <p className="text-muted-foreground text-sm">Cash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyAccountCard;
