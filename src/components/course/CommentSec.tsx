"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input2";
import { AvatarComp } from "./CourseDetail";
import { text } from "stream/consumers";

export default function CommentSec() {
    const commentRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState("")

    const onFocusFunc = () => {
        commentRef.current?.classList.add("flex");
        commentRef.current?.classList.remove("hidden");
    }
    const comments = [
        {
            userId : "1",
            text  : "Hello"
        },
        {
            userId : "2",
            text  : "Hello"
        },
        {
            userId : "3",
            text  : "Hello"
        },
    ]


  return (
    <div>
      <div className="mt-20 flex items-center">
        <div>
          <AvatarComp />
        </div>
        <form className="w-full" onSubmit={() => console.log("Hello")}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={onFocusFunc}
            onSubmit={() => console.log("Hello")}
            placeholder="Add a comment..."
            className="focus:outline-1 border-0 border-b-2"
          />
        </form>
      </div>
      <div ref={commentRef} className="justify-end mt-2 hidden">
        <Button onClick={()=> {
            setInputValue("");
            commentRef.current?.classList.add("hidden");
        }} variant={"outline"} size={"sm"} className="mr-2">Cancel</Button>
        <Button variant={"outline"} size={"sm"} className="">Comment</Button>
      </div>

      {comments.map((comment:any) => (
            <div key={comment.userId} className="mt-4 flex items-center">
                <AvatarComp />
                <span className="ml-2 text-md">{comment.text}</span>
            </div>
      ))}
    </div>
  );
}
