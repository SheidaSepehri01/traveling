import React, { useState } from "react";
import { logo, downArrow } from "../assets";

export const Header = () => {
  const [clicked, setClicked] = useState({
    tours: false,
    destinations: false,
    menu: false,
  });
  const menuStyle =
    "z-50 rounded-lg absolute top-[4.2rem] bg-opaqueGray p-3 shadow-[-1px_3px_9px_1px_#9b84689e]";

  const icon = "w-[1em]";

  return (
    <div
      className="header flex items-center z-50 
    fixed top-0  p-[1em] w-full h-16 justify-between
    bg-opaqueGray shadow-[-1px_3px_9px_1px_#9b84689e]
     z-[999] p-4 text-brown
    ">
      <div
        className="logo flex
       justify-between items-center 
       cursor-pointer gap-2
       "
      >
        <img
          src={logo}
          alt="logo"
          className=" gap-3 w-[52px] h-[52px] 
        rounded-full border-solid border-1 border-brown p-1"
        />

        <h5
          className="font-bold font-[Pacifico] 
        hover:scale-125 duration-300 "
        >
          Travelo
        </h5>
      </div>

      <button
        className="sm:hidden w-[2em] absolute right-[3em]"
        onClick={()=>setClicked((prev) => ({ menu: !prev.menu }))}
      >
        <img className="" src={downArrow} alt={'menu'}/>
      </button>
      <ul 
      className={clicked.menu ? `grid ${menuStyle} right-0` : "hidden"}>
        <li>Home</li>
        <li>
          Tours
        </li>
        <li>Destinations</li>
        <li>Contact</li>
      </ul>

      <ul
        className="
        grid grid-cols-[1fr_1fr_1.5fr_1fr]
       px-5 w-2/5 
       gap-3 
       font-bold cursor-pointer
       max-sm:hidden 
        "
      >
        <li>Home</li>
        <li
          className={clicked.tours ? "grid-cols-1 clicked" : ""}
          onClick={() =>
            setClicked((prev) => ({ destinations: false, tours: !prev.tours }))
          }
        >
          Tours
            <img src={downArrow} className={icon} />
          <ul className={`${menuStyle}`}>
            <li>Top5</li>
            <li>Luxurious</li>
            <li>Affordable</li>
          </ul>
        </li>
        <li
          className={
            clicked.destinations ? "clicked grid-cols-1" : ""
          }
          onClick={() =>
            setClicked((prev) => ({
              tours: false,
              destinations: !prev.destinations,
            }))
          }
        >
          Destinations
       
            <img src={downArrow} className={icon} />
        
          <ul className={`${menuStyle}`}>
            <li>Peaceful</li>
            <li>Romantic</li>
            <li>Adventure</li>
          </ul>
        </li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
