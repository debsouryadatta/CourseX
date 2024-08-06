import ProfileHeader from "@/components/profile/ProfileHeader";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { getUserCourses } from "./actions";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
    const session = await auth()
    const courses = await getUserCourses(session?.user?.id!);
    console.log("courses: ", courses);

    if(!session?.user?.id) {
      redirect("/gallery");
    }
    
  return (
    <div>
        <ProfileHeader user={session?.user} />
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
