"use client";

import { getBookmarkCoursesAction } from "./actions"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default async function page() {
  const [courses, setCourses] = useState([]);
  const session = useSession();
  const router = useRouter();
  
  if (!session?.data?.user) {
    toast("You need to be logged in to see Profile.");
    return router.push('/gallery');
  }

  useEffect(() => {
    const fetchCourses = async () => {
      const bookmarkCourses = await getBookmarkCoursesAction(session?.data?.user?.id!);
      const result: any = bookmarkCourses.map((item) => item.course);
      setCourses(result);
    }
    fetchCourses();
  }, [])


  return (
    <div className="min-h-[75vh]">
        <h2 className="text-center mt-20 mb-[-30px] text-2xl font-bold">Bookmarked Courses</h2>
        {courses && courses.length>0 ?
        <div className="mx-auto max-w-[70vw]">
          <HoverEffect items={courses} />
        </div>
        :
        <div className="flex justify-center items-center h-96">
            <h1 className="text-3xl">No bookmarks found</h1>
        </div>
        }
    </div>
  )
}
