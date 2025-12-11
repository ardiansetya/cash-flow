import { Bell, Search } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1.5 left-2" />
            <Input className="px-10" placeholder="Search Transactions" />
          </div>
          <div className="relative">
            <Button size={"icon-lg"} variant={"ghost"}>
              <Badge className="bg-destructive absolute -top-1 right-0 size-4">3</Badge>
              <Bell />
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Header;
