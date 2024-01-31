"use client";
import boxStyle from "../styles/box.module.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Box = () => {
  // const[title,setTitle]= useState("")
  const [content, setContent] = useState("");
  const router = useRouter();
  async function handleCreateNote() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/oi5gfMAyNOoR", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ content }]),
    });
    const data = await res.json();
    router.refresh();
  }
  return (
    <div className="w-[380px] m-auto md:w-full ">
      <div className="relative">
        <div>
          <textarea
            placeholder="Let it all out here"
            className={boxStyle.boxStyle}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className={boxStyle.boxBorder}></div>
      </div>
      <div>
        <div className="flex justify-center pt-10 mb-40">
          <button className={boxStyle.buttonStyle} onClick={handleCreateNote}>
            post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;
