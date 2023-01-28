import React from "react";
import { rightArrow } from "../assets";

const CardBtn = ({ img, alt, title, text }) => {
  return (
    <div
      className="bg-white w-[8em]
      rounded-[9em] relative 
     top-0 left-0 grid items-center 
     justify-items-center gap-1
     "
    >
      <img
        src={img}
        alt={alt}
        className="
      border-[6px] border-white border-solid 
      rounded-full
      w-[60%] h-full shadow-custom
      object-cover mt-3
      "
      />
      <h3
        className="text-center 
      font-semibold tracking-wide pt-4
      "
      >
        {title}
        <br />
        <span className="text-slate-400 tracking-normal font-medium">
          {text}
        </span>
      </h3>
      <button className="flex items-center justify-center">
        <img src={rightArrow} className="w-1/6 -rotate-45" />
      </button>
    </div>
  );
};

export default CardBtn;
