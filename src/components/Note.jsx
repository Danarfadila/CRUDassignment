"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import boxStyle from "../styles/box.module.css";
import displayStyle from "../styles/note.module.css";

const Note = ({ item }) => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(item.content);

  async function handleDelete() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/oi5gfMAyNOoR", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });
    const data = await res.json();
    router.refresh();
  }
  async function handleUpdate() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/oi5gfMAyNOoR", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: item._id, content }),
    });
    const data = await res.json();
    router.refresh();
    setEdit(false);
  }

  if (edit) {
    return (
      <div>
        <div className="relative">
          <div>
            <textarea
              placeholder="Whats you wanna change?"
              className={boxStyle.boxStyle}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className={boxStyle.boxBorder}></div>
        </div>
        <div>
          <div className="flex justify-center pt-10">
            <button className={boxStyle.buttonStyle} onClick={handleUpdate}>
              update
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative p-5 my-10">
        <div className="text-justify mb-5">{item.content}</div>
        <div className="flex space-x-5">
          <div className="relative px-5">
            <button onClick={handleDelete}>Delete</button>
            <div className={displayStyle.deleteButtonStyle}></div>
          </div>
          <div className="relative px-5">
            <button onClick={() => setEdit(true)}>Edit</button>
            <div className={displayStyle.editButtonStyle}></div>
          </div>
        </div>
        <div className={displayStyle.displayBox}></div>
      </div>
    </div>
  );
};

export default Note;
