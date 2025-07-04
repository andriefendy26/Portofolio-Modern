import React, { Children, useRef, useState } from "react";
import Lanyard from "../Component/Lanyard/Lanyard";
import BlurText from "../Component/BlurText/Blurtext";
import GradientText from "../Component/GradientText/GradienText";
import Image from "../assets/MeToo.png";
import { motion } from "motion/react";
import "./css/Hero.css";
import AnimatedContent from "../Component/AnimateContent/AnimateContent";
import { Link } from "react-router-dom";

export default function Hero() {
  const TextUp = useRef(null);
  const TextDown = useRef(null);
  // const [hover, setHover] = useState();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [positionCursor, setPositionCursor] = useState({ x: 0, y: 0 });
  const [CursorIsActive, setCursorActive] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width - 0.5) * 70;
    const y = ((e.clientY - top) / height - 0.5) * 5;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseMoveCursor = (e) => {
    setCursorActive(true);
    setPositionCursor({ x: e.clientX - 20, y: e.clientY - 20 });
  };

  const handleMouseLeaveCursor = () => {
    setCursorActive(false);
    setPositionCursor({ x: 0, y: 0 });
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const toggleState = (el, { solid, stroke, strokeNoHover, hidden }) => {
    el.classList.toggle("text-solid", solid);
    el.classList.toggle("text-stroke", stroke);
    el.classList.toggle("text-stroke-no-hover", strokeNoHover);
    el.classList.toggle("hidden", hidden);
  };

  const handleMouseEnterText = (val) => {
    if (!["atas", "bawah"].includes(val)) {
      // Element ATAS
      toggleState(TextUp.current.children[0], {
        solid: highlightUp,
        stroke: false,
        strokeNoHover: !highlightUp,
        hidden: false,
      });
      toggleState(TextUp.current.children[1], {
        solid: false,
        stroke: highlightUp,
        strokeNoHover: false,
        hidden: !highlightUp,
      });
      return;
    }
    const highlightUp = val == "atas";
    const highlightDown = val == "bawah";

    // Element ATAS
    toggleState(TextUp.current.children[0], {
      solid: highlightUp,
      stroke: false,
      strokeNoHover: !highlightUp,
      hidden: false,
    });
    toggleState(TextUp.current.children[1], {
      solid: false,
      stroke: highlightUp,
      strokeNoHover: false,
      hidden: !highlightUp,
    });

    // Element BAWAH
    toggleState(TextDown.current.children[0], {
      solid: highlightDown,
      stroke: false,
      strokeNoHover: !highlightDown,
      hidden: false,
    });
    toggleState(TextDown.current.children[1], {
      solid: false,
      stroke: highlightDown,
      strokeNoHover: false,
      hidden: !highlightDown,
    });
  };

  return (
    <div
      className=""
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${
          CursorIsActive ? "absolute" : "hidden"
        } border-black border-2 p-4 rounded-full z-[9999999] text-4xl pointer-events-none`}
        style={{
          transform: `translate(${positionCursor.x}px, ${positionCursor.y}px)`,
        }}
      ></div>
      <div className="flex flex-col pt-14 h-screen justify-center items-center gap-1 cursor-pointer">
        <p className="roboto-mono text-xl mb-6">
          Hello 👋, Nama saya Andri Efendy dan seorang freelancer
        </p>
        <div
          className="flex flex-col items-center"
          onMouseMove={handleMouseMoveCursor}
          onMouseLeave={handleMouseLeaveCursor}
        >
          <div
            ref={TextUp}
            onMouseEnter={() => handleMouseEnterText("atas")}
            className="text-overlay-wrapper edu-vic-wa-nt-hand"
          >
            <BlurText
              text="FullStack"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="transition-all duration-500 ease-in-out text-solid text-9xl"
            />
            <BlurText
              text="FullStack"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="transition-all duration-500 ease-in-out text-stroke text-9xl "
            />
          </div>
          <div
            ref={TextDown}
            onMouseEnter={() => handleMouseEnterText("bawah")}
            className="text-overlay-wrapper oswald"
          >
            <BlurText
              text="Developer"
              delay={200}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-stroke-no-hover transition-all duration-500 ease-in-out tracking-[30px]"
            ></BlurText>
            <BlurText
              text="Developer"
              delay={200}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="hidden transition-all duration-500 ease-in-out tracking-[30px]"
            ></BlurText>
          </div>
          <div className="flex justify-between w-full text-2xl italic">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="ease.out"
              initialOpacity={1}
              animateOpacity
            >
              <p className="">Kalimantan Utara, Indonesia</p>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="ease.out"
              initialOpacity={1}
              animateOpacity
            >
              <p>Computer Engineering</p>
            </AnimatedContent>
          </div>
        </div>
        <img
          className="absolute w-[500px] bottom-0 z-[30] grayscale pointer-events-none mask-b-from-70% mask-b-to-95%"
          src={Image}
          alt="Andri"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></img>
        <div className="flex gap-2 mt-10">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={1}
            animateOpacity
          >
            <Link to="/">
              <div
                className="box p-2 px-5 tran sition-all duration-300 hover:shadow-2xl bg-black text-white border-2 cursor-pointer rounded-lg tracking-tight hover:px-10"
                // animate={{ x: 0 }}
                // whileInView={{ opacity: 1 }}
                // style={{ x: -100 }}
                // layout
              >
                You need a website
              </div>
            </Link>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            duration={1.8}
            ease="bounce.out"
            initialOpacity={1}
            animateOpacity
          >
            <Link to="/project">
              <div className="p-2 px-5 transition-all duration-300 hover:shadow-2xl bg-white border-black border-2 rounded-lg hover:px-10">
                You need a Mobile Apps
              </div>
            </Link>
          </AnimatedContent>
        </div>
      </div>
      {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
    </div>
  );
}
