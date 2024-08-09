"use client";

import ProfileHeader from "@/components/profile/ProfileHeader";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { getUserCourses, getUserProfileAction } from "./actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect, useState } from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({params: {slug}}: Props) {
  const [courses, setCourses] = useState([]);
  const [profile, setProfile] = useState(null);
  const session = useSession();
  const router = useRouter();
  
  if (!session?.data?.user) {
    toast("You need to be logged in to see Profile.");
    return router.push('/gallery');
  }

  useEffect(() => {
    const fetchCourses = async () => {
      const courses: any = await getUserCourses(slug);
      const profile: any = await getUserProfileAction(slug);
      setCourses(courses);
      setProfile(profile);
    }
    fetchCourses();
  }, [])
  
    
  return (
    <div className="min-h-[75vh]">
        <ProfileHeader user={profile} />
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
