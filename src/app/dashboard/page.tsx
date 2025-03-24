"use client";

import { useAuth } from "@clerk/nextjs";

export default function DashboardClient() {
  const { isSignedIn, userId } = useAuth();

  if (!isSignedIn) {
    return <p className="text-center mt-10 text-xl">Please log in</p>;
  }

  return <h1 className="text-2xl font-bold">Welcome, User {userId}!</h1>;
}
