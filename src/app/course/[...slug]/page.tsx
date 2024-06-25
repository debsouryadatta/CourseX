// "use client";

import { ImageComp } from "@/components/course/ImageComp";
import { SelectChapter } from "@/components/course/SelectChapter";
import { getCourseDetails } from "./actions";
import ChapterComp from "@/components/course/ChapterComp";

type Props = {
  params: {
    slug: string[];
  };
};

export default async function page({ params: { slug } }: Props) {

  console.log("Slug: ", slug);
  const courseId = slug[0];
  const chapterId = slug[1];

  const courseDetails = await getCourseDetails(courseId);
  console.log("Course Details: ", courseDetails);


  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <SelectChapter courseDetails={courseDetails} />
      <div className="mt-10 mb-20">

      {slug?.length === 1 && (
        <ImageComp course={courseDetails && courseDetails[0].course} firstChapterId={courseDetails && courseDetails[0].id} />
      )}

      {slug?.length > 1 && (
        <ChapterComp
          courseDetails={courseDetails}
          chapterId={chapterId}
        />
      )}
      </div>
    </div>
  );
}
