"use client";

import { getUserDetails } from "@/app/course/[...slug]/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, FileDown, Share2, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import CommentSec from "./CommentSec";

export default function CourseDetail({ course }: { course: any }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserDetails(course.userId);
      console.log(res);

      setUser(res ? res : null);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mt-6 p-2 flex justify-between">
        <div className="mr-2 flex justify-center items-center">
          <AvatarComp />
          <span className="ml-2 text-lg font-bold">{user?.name}</span>
        </div>
        <div className="flex">
          <ThumbsUp fill="#fff" />
          <Share2 />
          <Bookmark fill="#fff" />
          <FileDown />
        </div>
      </div>

      <CommentSec />
    </>
  );
}

export function AvatarComp() {
  return (
    <Avatar className="w-[40px] h-[40px]">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
