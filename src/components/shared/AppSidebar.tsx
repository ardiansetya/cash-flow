import { ArrowLeftRight, BarChart3, LayoutDashboard, LogOut, PiggyBank, Settings, Target, Wallet } from "lucide-react";
import Link from "next/link";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import UserFooter from "./UserFooter";

// Menu items.
const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Transactions", url: "/transactions", icon: ArrowLeftRight },
  { title: "Budgets", url: "/budgets", icon: PiggyBank },
  { title: "Goals", url: "/goals", icon: Target },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Accounts", url: "/accounts", icon: Wallet },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-row items-center gap-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link className="py-8" href="/">
                <Wallet className="text-primary size-5!" />
                <div className="flex flex-col items-center">
                  <span className="font-display text-foreground text-lg font-bold tracking-tight">
                    CashFlow
                  </span>
                  <span className="text-muted-foreground -mt-0.5 text-[10px]">
                    Student Finance
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="hover:bg-amber-400" asChild>
                    <Link className="text-lg" href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator/>
      <SidebarFooter>
        <UserFooter/>
      </SidebarFooter>
    </Sidebar>
  );
}
