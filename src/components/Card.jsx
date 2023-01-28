import React from "react";


 const commonClasses = 'rounded-2xl h-[170px] text-white';

 const TextCard = ({ title, text, btn }) => {
  return (
    <div className={`text-card 
   bg-opaqueBlack ${commonClasses}`}>
     
     <div className="p-5 text-sm ">
     <h3 className="font-semibold  tracking-wide
      
      ">{title ? title : ""}</h3>
      {text ? text : ""}
  
      <button className="bg-chocolate p-2 w-1/3
       h-[3em] rounded-3xl mt-1
       ">{btn}</button>
     </div>
    </div>
  );
};
export default TextCard;

export const VideoCard = ({ video}) => (
  <div className="video-card flex items-center">
    <video controls className={` p-0 m-0  
     rounded-2xl w-full ${commonClasses} `}>
      <source src={video} />
    </video>
    <button>
    </button>
  </div>
);


