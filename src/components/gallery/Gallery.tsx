import { HoverEffect } from "../ui/card-hover-effect";

export function Gallery({courses}: {courses: { id: string, title: string, image: string, description: string }[] | undefined}) {
  return (
    <div className="max-w-[80vw] mx-auto px-8">
      <HoverEffect items={courses} />
    </div>
  );
}
