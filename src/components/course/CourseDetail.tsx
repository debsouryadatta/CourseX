"use client";

import {
  addLikeAction,
  addToBookmarkAction,
  checkLikeBookmarkStatusAction,
  getUserDetails,
  removeFromBookmarkAction,
  removeLikeAction,
} from "@/app/course/[...slug]/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, FileDown, Share2, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import CommentSec from "./CommentSec";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function CourseDetail({ course }: { course: any }) {
  const [user, setUser] = useState<any>(null);
  const [bookmark, setBookmark] = useState(false);
  const [like, setLike] = useState(false);

  const session = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserDetails(course.userId);
        console.log(res);
        setUser(res ? res : null);
      } catch (error) {
        console.log("Error", error);
        toast("Error fetching info")
      }
    };

    const checkLikeBookmarkStatus = async () => {
      try {
        const {bookmark, like} = await checkLikeBookmarkStatusAction(
          session?.data?.user?.id!,
          course.id
        )
        if(bookmark) setBookmark(true)
        if(like) setLike(true)
      } catch (error) {
        console.log("Error", error);
        toast("Error fetching info")
      }
    }

    fetchData();
    checkLikeBookmarkStatus();
  }, []);

  const addToBookmark = async () => {
    try {
      setBookmark(true);
      const res = await addToBookmarkAction(
        session?.data?.user?.id!,
        course.id
      );
      toast("Added to bookmark");
    } catch (error) {
      toast("Error adding to bookmark");
    }
  };

  const removeFromBookmark = async () => {
    try {
      setBookmark(false);
      const res = await removeFromBookmarkAction(
        session?.data?.user?.id!,
        course.id
      );
      toast("Removed from bookmark");
    } catch (error) {
      toast("Error removing from bookmark");
    }
  };

  const addLike = async () => {
    try {
      setLike(true);
      const res = await addLikeAction(session?.data?.user?.id!, course.id);
      toast("Course liked");
    } catch (error) {
      toast("Error liking");
    }
  }

  const removeLike = async () => {
    try {
      setLike(false);
      const res = await removeLikeAction(session?.data?.user?.id!, course.id);
      toast("Course unliked");
    } catch (error) {
      toast("Error unliking");
    }
  }

    return (
      <>
        <div className="mt-6 p-2 flex justify-between">
          <div className="mr-2 flex justify-center items-center">
            <AvatarComp />
            <span className="ml-2 text-lg font-bold">{user?.name}</span>
          </div>
          <div className="flex justify-between w-[100px] sm:w-[200px]">
            {like ? (
              <button onClick={removeLike} className="mr-2">
                <ThumbsUp fill="#fff" />
              </button>
            ) : (
              <button onClick={addLike} className="mr-2">
                <ThumbsUp />
              </button>
            )}
            <button>
              <Share2 />
            </button>
            {bookmark ? (
              <button onClick={removeFromBookmark} className="ml-2">
                <Bookmark fill="#fff" />
              </button>
            ) : (
              <button onClick={addToBookmark} className="ml-2">
                <Bookmark />
              </button>
            )}
            <button>
              <FileDown />
            </button>
          </div>
        </div>

        <CommentSec />
      </>
    );
  };

  export function AvatarComp() {
    return (
      <Avatar className="w-[40px] h-[40px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
  }
