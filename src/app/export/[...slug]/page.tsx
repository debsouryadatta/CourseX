"use client";

import { ImagesSlider } from "@/components/ui/images-slider";
import { getFullCourseAction } from "./actions";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// @ts-ignore
import html2pdf from "html2pdf.js";
import Image from "next/image";
// import { html2pdf } from "html2pdf-ts";
// import { HTML2PDFOptions } from "html2pdf-ts";

type Props = {
  params: {
    slug: string[];
  };
};

export default function page({ params: { slug } }: Props) {
  const [fullCourse, setFullCourse] = useState<any>(null);

  const exportPDF = () => {
    // Accurately measure the content's width, possibly with a more refined approach
    const contentWidth = Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
      document.documentElement.offsetWidth,
      document.body.offsetWidth,
      document.documentElement.clientWidth
    );
  
    // Adjust html2canvas and jsPDF options based on content size
    const options = {
      filename: "webpage.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 1, // Adjust based on testing
        scrollX: 0,
        scrollY: 0,
        windowWidth: contentWidth, // Use the accurately measured content width
        width: contentWidth, // Explicitly set the width to ensure it captures the full content
        windowHeight: document.documentElement.offsetHeight,
      },
      jsPDF: {
        unit: "in",
        format: "a3", // Consider using a larger format if necessary
        orientation: "landscape", // Adjust based on content orientation
      },
    };
  
    // Use html2pdf to export the body of the webpage as PDF
    html2pdf().from(document.body).set(options).save();
  };

  useEffect(() => {
    const getFullCourse = async () => {
      try {
        const res: any = await getFullCourseAction(slug[0]);
        setFullCourse(res);
        console.log("Full Course: ", res);
      } catch (error) {
        console.log("Error", error);
      }
    };

    getFullCourse();
  }, []);

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <Button onClick={exportPDF} className="my-4" variant={"outline"}>
        Export as PDF
      </Button>
      {/* COURSE DETAILS */}
      {fullCourse && (
        <div className="flex justify-center items-center w-[80vw] flex-col lg:flex-row">
          <div className="w-[500px] h-[300px] lg:mr-20">
            <Image
              src={fullCourse?.image}
              className="w-full h-full rounded-md object-cover"
              alt="cover image"
              width={300}
              height={300}
              layout="fixed"
              />
          </div>
            <div className="mt-5">
            <h1 className="text-4xl font-bold mb-2 text-center lg:text-start">Title: {fullCourse?.title}</h1>
            <h4 className="text-sm uppercase text-secondary-foreground/60">
              {fullCourse?.description}
            </h4>
            </div>
        </div>
      )}

      {/* CHAPTERS */}
      {fullCourse?.units.map((chapter: any, index: number) => {
        return (
          <div
            key={index + 1}
            className="flex flex-col justify-center items-center w-[80vw] mt-20"
          >
            <h4 className="text-sm uppercase text-secondary-foreground/60">
              Chapter: {index + 1}
            </h4>
            <h1 className="text-4xl font-bold">{chapter.title}</h1>
            <div className="mt-16">
              <h3 className="text-3xl font-semibold">Summary:</h3>
              <p className="mt-2 text-secondary-foreground/80">
                {chapter.summary}
              </p>
            </div>
            <div className="mt-16">
              <h3 className="text-3xl font-semibold">
                More about {chapter.title}:
              </h3>
              {chapter.subtopics.map((subtopic: any, index: number) => (
                <div key={index}>
                  <h3 className="mt-6 text-xl font-semibold">{subtopic}</h3>
                  <p className="mt-1 text-secondary-foreground/80">
                    {chapter.subtopicExplanations[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
