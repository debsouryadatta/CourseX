"use client";

import { CardComp } from "@/components/CardComp";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const session = useSession();

  const fetchFunc = async () => {
    const result = await fetch("/api/user");
    console.log(await result.json());
  }

  useEffect(() => {
    fetchFunc();
  }, [])
  


  console.log(session);

  return (
    <div className="dark">
      <Button type="submit" onClick={() => signIn()}>
        Sign In
      </Button>
      <Button type="submit" onClick={() => signOut({ callbackUrl: "/" })}>
        Sign Out
      </Button>
      <Image
        src={session?.data?.user?.image || "/default-avatar.png"}
        width="40"
        height="40"
        alt="user avatar"
        className="rounded-full"
      />
      <div>{session?.data?.user?.name}</div>

      <CardComp />
    </div>
  );
}
