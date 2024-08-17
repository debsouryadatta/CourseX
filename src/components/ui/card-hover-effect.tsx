"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: string;
    title: string;
    image: string;
    description: string;
    user?: any;
  }[] | undefined;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const session = useSession();
  

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items?.map((item, idx) => (
        <Link
          href={`/course/${item?.id}`}
          key={item?.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {/* <div className="w-full h-40"> */}
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="rounded-2xl w-[500px] h-[200px]"
                />
            {/* </div> */}

            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description.slice(0,70)}...</CardDescription>
            <div className="flex justify-start items-end mt-3">
              <AvatarComp user={item?.user} />
              <span className="text-sm ml-1">{item?.user?.name}</span>
            </div>

          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-1 overflow-hidden bg-gray-100 dark:bg-zinc-800 border border-slate-300 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-800 dark:text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-700 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};


export function AvatarComp({user}: {user: any}) {
  return (
    <Avatar className="w-[25px] h-[25px]">
      <AvatarImage src={user?.image} />
      <AvatarFallback>{user?.name[0]}</AvatarFallback>
    </Avatar>
  );
}