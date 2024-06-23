import { Gallery } from "@/components/gallery/Gallery";
import { prisma } from "@/lib/db";

async function getCourses(){
  try {
    const res = await prisma.course.findMany();
    return res;
  } catch (error) {
    console.log("Error: ", error);
  }

}

export default async function page() {
  const courses = await getCourses();
  console.log("Courses: ", courses);
  
  return (
    <div className="mt-20">
      <Gallery courses={courses} />
    </div>
  )
}
