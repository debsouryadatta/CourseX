"use server";

import { prisma } from "@/lib/db";

export async function getCourseDetails(courseId: string) {
    try {
      const res = await prisma.chapter.findMany({
        where: {
          courseId: courseId,
        },
        select: {
          course: true,
          id: true,
          courseId: true,
          title: true,
          subtopics: true,
          subtopicExplanations: true,
          youtubeSearchQuery: true,
          videoId: true,
          summary: true,
        },
      });
      return res;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

export const getUserDetails = async (userId: string) => {
  try {
    const res = await prisma.user.findUnique({
      where: {
        id: userId,
      }
    })
    return res;
  } catch (error) {
    console.log("Error", error);
  }
}