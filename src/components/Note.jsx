import React, { useState } from "react";

const Note = ({ title, text, Btn }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={clicked ? "hidden" :
     `bg-opaqueGray h-full w-full grid content-center
      justify-items-center  relative z-20
     `}>
      <div className="Note-Box bg-beige
      grid content-between justify-items-start
      grid-rows-3
       rounded-lg w-1/3 h-[10em] p-6 
       border-solid border-2 border-chocolate
      ">
        <h1 className="w-full font-semibold">{title}</h1>
        <p>{text}</p>
        <button className="w-[4em] p-2
        bg-chocolate rounded-lg text-beige font-medium
        "
        onClick={() => setClicked((prev) => !prev)}>{Btn}</button>
      </div>
    </div>
  );
};

export default Note;
