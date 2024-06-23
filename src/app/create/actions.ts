"use server";

import { prisma } from "@/lib/db";
import { generateChapter, generateCourseDescription, generateCourseImage } from "@/lib/generate";

export async function generateChapters(chapters: { id: number, title: string }[]){
    let genChapters = [];
    try {
        for(const chapter of chapters){
          let res = await generateChapter(chapter.title);
          genChapters.push(res);
        }
        console.log("Generated Chapters", genChapters);
        return genChapters;
      } catch (error) {
        console.log("Error", error);
        throw error;
      }
}



export async function generateCourse(chapters: { id: number, title: string }[], courseTitle: string){
    try {
        let generatedChapters = await generateChapters(chapters)
        let imageUrl = await generateCourseImage(courseTitle);
        let description = await generateCourseDescription(courseTitle);

        
        const response = await prisma.course.create({
            data: {
                title: courseTitle,
                image: imageUrl,
                description: description
            }
        })
        const response2 = []

        for (const generatedChapter of generatedChapters){
            response2.push(
                await prisma.chapter.create({
                    data: {
                        title: generatedChapter.title,
                        courseId: String(response.id),
                        subtopics: generatedChapter.subtopics,
                        subtopicExplanations: generatedChapter.subtopicExplanations,
                        youtubeSearchQuery: generatedChapter.youtubeSearchQuery,
                        videoId: generatedChapter.videoId,
                        summary: generatedChapter.summary
                    }
                })
            )
        }

        return {course: response, chapters: response2}

    } catch (error) {
        console.log("Error", error);
        throw error;
    }
}