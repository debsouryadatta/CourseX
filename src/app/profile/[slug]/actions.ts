"use server";

import { prisma } from "@/lib/db";


export async function getUserCourses(userId: string){
    try {
        const courses = await prisma.course.findMany({
            where: {
                userId: userId
            }
        })
        return courses;
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
}