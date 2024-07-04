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


export const addToBookmarkAction = async (userId: string, courseId: string) => {
  try {
    const res = await prisma.bookmark.create({
      data: {
        userId: userId,
        courseId: courseId
      }
    })
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export const removeFromBookmarkAction = async (userId: string, courseId: string) => {
  try {
    const res = await prisma.bookmark.deleteMany({
      where: {
        userId: userId,
        courseId: courseId
      }
    })
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export const addLikeAction = async (userId: string, courseId: string) => {
  try {
    const res = await prisma.like.create({
      data: {
        userId: userId,
        courseId: courseId
      }
    })
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export const removeLikeAction = async (userId: string, courseId: string) => {
  try {
    const res = await prisma.like.deleteMany({
      where: {
        userId: userId,
        courseId: courseId
      }
    })
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export const checkLikeBookmarkStatusAction = async (userId: string, courseId: string) => {
  try {
    const bookmark = await prisma.bookmark.findFirst({
      where: {
        userId: userId,
        courseId: courseId
      }
    })
    const like = await prisma.like.findFirst({
      where: {
        userId: userId,
        courseId: courseId
      }
    })
    return {bookmark, like};
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}