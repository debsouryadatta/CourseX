"use client";

import ProfileHeader from "@/components/profile/ProfileHeader";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { getUserCourses } from "./actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default async function page({slug}: {slug: string}) {
  const [courses, setCourses] = useState([]);
  const session = useSession();
  const router = useRouter();
  
  if (!session?.data?.user) {
    toast("You need to be logged in to see Profile.");
    return router.push('/gallery');
  }

  useEffect(() => {
    const fetchCourses = async () => {
      const result: any = await getUserCourses(slug);
      setCourses(result);
    }
    fetchCourses();
  }, [])
  
    
  return (
    <div>
        <ProfileHeader user={session?.data?.user} />
        <h2 className="text-center mt-10 mb-[-30px] text-2xl font-bold">Courses Created</h2>
        {courses ?
        <div className="mx-auto max-w-[70vw]">
          <HoverEffect items={courses} />
        </div>
        :
        <div className="flex justify-center items-center h-96">
            <h1 className="text-3xl">No courses found</h1>
        </div>
        }
        {/* <HoverEffect /> */}
    </div>
  );
}
