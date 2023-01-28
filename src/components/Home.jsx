import React, { useRef } from "react";
import CardBtn from "./CardBtn";
import gsap from "gsap";
import TextCard, { VideoCard } from "./Card";

import {
  video1,
  video2,
  mount1Green,
  fog1,
  travel,
  travel4,
  mount1Dark,
  mount2Green,
  colosseum,
} from "../assets";
import Note from "./Note";

const Home = () => {

  const mount1Img = useRef();
  const shadowImg = useRef();
  const mount2Img = useRef();
  const colosseumImg = useRef();
  const fogImg = useRef();
  const cardsRef = useRef();

  const handleAnimationStart = () => {
    gsap.to(mount1Img.current, { x: 10, y: -60, duration: 1 });
    gsap.to(shadowImg.current, { x: 40, y: -10, duration: 2 });
    gsap.to(fogImg.current, { scale: 1.04, duration: 2 });
    gsap.to(colosseumImg.current, { x: -60, y: 10, scale: 1.1, duration: 1 });
    gsap.to(mount2Img.current, { x: -50, y: -60, scale: 1.3, duration: 1 });
    gsap.to(cardsRef.current, { scale: 1.1, duration: 1 });
  };
  const handleAnimationEnd = () => {
    gsap.to(mount1Img.current, { x: 0, y: 0, duration: 1 });
    gsap.to(shadowImg.current, { x: 0, y: 0, duration: 2 });
    gsap.to(fogImg.current, { scale: 1, duration: 2 });
    gsap.to(colosseumImg.current, { x: 0, y: 0, scale: 1, duration: 1 });
    gsap.to(mount2Img.current, { x: 0, y: 0, scale: 1, duration: 1 });
    gsap.to(cardsRef.current, { scale: 1, duration: 1 });
  
  };

  return (
    <div
      className="home h-full relative w-full"
      onMouseEnter={handleAnimationStart}
      onMouseLeave={handleAnimationEnd}
    >
    {/* <Note title={'Hi! Welcome'} text={'Im Not Fully responsive Yet'} Btn={'Ok'} /> */}
      <h1
        className="w-1/2 text-[1.5rem] max-sm:text-[1em] max-sm:top-[5em]
      relative top-[1.5em] left-[2em] font-[anton]
      text-5xl tracking-wider leading-snug
      "
      >
        Explore the World
        <br />
        Wide Range Of Tours
        <br />
        <span className="font-[rubik] text-xl font-medium">
          Last planing 50,000 trips are ready for You.
        </span>
      </h1>

      <div
        className="background bg-no-repeat
      flex  items-baseline content-center -z-10
      absolute top-0  left-0  w-full h-full
      overflow-hidden
       bg-cover bg-texture bg-beige"
      >
        <img className="" id="shadow" src={mount1Dark} ref={shadowImg} />
        <img className="" id="mount-1" src={mount1Green} ref={mount1Img} />
        <img className="max-md:-right-[15em] max-md:-bottom-[11em]
        -right-[31em]
        " id="colosseum" src={colosseum} ref={colosseumImg} />
        <img className="" id="mount-2" src={mount2Green} ref={mount2Img} />
        <img className="" id="fog" src={fog1} ref={fogImg} />
      </div>
      <div
        className="CardBtns flex gap-4
       relative top-[5em] left-[3em] h-[12em] max-md:top-[11em] max-md:grid "
      >
        <CardBtn
          img={travel}
          alt={"Lorem Ipsum"}
          title={"Lorem Ipsum"}
          text={"lorem ipsum"}
        />
        <CardBtn
          img={travel4}
          alt={"Lorem Ipsum"}
          title={"Lorem Ipsum"}
          text={"lorem ipsum"}
        />
      </div>
      <div
        className="cards h-[200px] w-3/4
        grid px-[3em] justify-items-center items-center
       grid-cols-3 gap-4 absolute bottom-[0.3em]
      left-1/2 -translate-x-1/3
      overflow-hidden  max-sm:hidden
       "
        ref={cardsRef}
      >
        <TextCard
          title={"Lorem Ipsum"}
          text={
            <p className="w-full">
              Lorem ipsum, dolor sit amet
              <br />
              adipisicing elit. Mollitia nesciunt
              <br />
              adipisci ipsa nihil quisquam eos?
            </p>
          }
          btn={"Explore"}
        />
        <VideoCard video={video2} />
        <VideoCard video={video1} />
      </div>
    </div>
  );
};

export default Home;
