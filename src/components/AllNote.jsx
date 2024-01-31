import React from "react";
import Note from "./Note";

const AllNote = ({ data }) => {
  return (
    <div className="w-[350px] m-auto md:w-full">
      {data.map((item) => {
        return <Note key={item._id} item={item} />;
      })}
    </div>
  );
};

export default AllNote;
