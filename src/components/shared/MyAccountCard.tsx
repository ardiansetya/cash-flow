"use client";

import { Wallet } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import { api } from "~/trpc/react";
import { toRupiah } from "~/lib/toRupiah";

const MyAccountCard = () => {

  const { data } = api.userAccount.getAllBankAccount.useQuery();
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
          {data?.map((account) => (
            <div className="hover:bg-accent w-1/2 rounded-xl p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Wallet />
                    {account.name}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-semibold">{toRupiah(account.currentBalance)}</p>
                    <p className="text-muted-foreground text-sm">{account.type}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MyAccountCard;
