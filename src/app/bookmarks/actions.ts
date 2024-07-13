"use server";

import { prisma } from "@/lib/db";

export const getBookmarkCoursesAction = async (userId: string) => {
    try {
        const bookmarkCourses = await prisma.bookmark.findMany({
            where: {
                userId: userId
            },
            include: {
                course: {
                    include: {
                        user: true
                    }
                }
            }
        })
        return bookmarkCourses;
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
}