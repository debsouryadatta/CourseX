"use server";

import { prisma } from "@/lib/db";


export async function getUserCourses(userId: string){
    try {
        const courses = await prisma.course.findMany({
            where: {
                userId: userId
            },
            include: {
                user: true,
            }
        })
        return courses;
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
}

export async function getUserProfileAction(userId: string){
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        return user;
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
}