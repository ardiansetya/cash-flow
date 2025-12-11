"use client";

import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { authClient } from "~/server/better-auth/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const UserFooter = () => {
  const user = authClient.useSession();
  return (
    <div className="hover:bg-accent flex items-center justify-between px-2 py-4">
      {user.data?.session ? (
        <>
          <Link href={"/profile"} className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src={user.data?.user.image || ""}
                alt={user.data?.user.name}
              />
              <AvatarFallback>{user.data?.user.name}</AvatarFallback>
            </Avatar>
            <div className="space-y-0.5">
              <h3 className="text-sm font-semibold">{user.data?.user.name}</h3>
              <p className="text-muted-foreground text-xs">
                {user.data?.user.email}
              </p>
            </div>
          </Link>

          <Button
            className="hover:text-destructive"
            onClick={() => authClient.signOut()}
            variant={"ghost"}
            size={"icon-lg"}
          >
            <LogOutIcon className="size-4" />
          </Button>
        </>
      ) : (
        <Button
          onClick={() => authClient.signIn.social({ provider: "github" })}
          className="w-full"
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default UserFooter;
