import { auth } from "@/lib/auth"
import { getBookmarkCoursesAction } from "./actions"
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default async function page() {
    const session = await auth()
    const bookmarkCourses = await getBookmarkCoursesAction(session?.user?.id!);
    const courses = bookmarkCourses.map((item) => item.course);
    console.log("courses: ", courses);
  return (
    <div>
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
