import { Plus } from "lucide-react";
import { useDate } from "~/hooks/useDate";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import UserHero from "./UserHero";

const HeroSection = () => {
  const greeting = useDate();
  return (
    <Card className="bg-accent w-full rounded-xl px-6 py-4">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">{greeting}</p>
        <UserHero />
        <p className="text-muted-foreground text-sm">
          You've spent Rp 808.000 this month. Your budget is looking healthy!
        </p>
      </div>

      <div>
        <Button variant="outline" size={"lg"} className="">
          <Plus /> Add Transactions
        </Button>
      </div>
    </Card>
  );
};

export default HeroSection;
