"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { ProfileMenu } from "./ProfileMenu";

export function NavbarComp() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const session = useSession();
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-center items-center">
          <Link href={"/gallery"} className="mr-2 sm:mr-6">
            Gallery
          </Link>
          <Link href={"/create"} className="mr-2 sm:mr-6">
            Create
          </Link>
          <Link href={"/create"} className="mr-2 sm:mr-6">
            Settings
          </Link>
        </div>
        <div className="flex items-center">
          <div className="mr-2"><ThemeToggle /></div>
          {session?.data?.user ? 
          <div className="mr-2">
            <ProfileMenu />
          </div>
          : 
          <Button variant={"outline"} size={"sm"} onClick={() => signIn()} className="mr-2 py-[-10px]">Sign In</Button>
        }
        </div>
      </Menu>
    </div>
  );
}

export function AvatarComp({user}: {user: any}) {
  return (
      <Avatar>
        <AvatarImage src={user?.image} />
        <AvatarFallback>{user?.name[0]}</AvatarFallback>
      </Avatar>
  );
}

