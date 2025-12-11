"use client";

import { authClient } from "~/server/better-auth/client";

const UserHero = () => {
  const user = authClient.useSession();
  return <h3 className="text-2xl font-bold">{user.data?.user.name} 👋</h3>;
};

export default UserHero;
