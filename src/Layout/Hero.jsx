import React, { Children, useRef, useState } from "react";
import BlurText from "../Component/BlurText/Blurtext";
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
    setPositionCursor({ x: e.clientX - 20, y: e.clientY - 84 });
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
      className="pt-28 sm:pt-0 lg:mt-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${
          CursorIsActive ? "absolute" : "hidden"
        } border-black border-2 bg-white p-4 rounded-full z-[9999999] text-4xl pointer-events-none`}
        style={{
          transform: `translate(${positionCursor.x}px, ${positionCursor.y}px)`,
        }}
      >
        <svg
          fill="#000000"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 501.984 501.984"
          xml:space="preserve"
        >
          <g>
            <g>
              <g>
                <path
                  d="M491.796,438.532L344.031,290.768c-12.194-12.195-15.791-30.451-9.163-46.511c9.052-21.934,13.449-45.194,13.069-69.134
				c-0.732-46.107-19.126-89.197-51.792-121.332C263.483,21.662,220.097,3.967,173.979,3.967
				c-45.889,0-89.187,17.709-121.919,49.864C19.372,85.944,0.895,128.836,0.032,174.605c-0.886,46.929,16.841,91.34,49.913,125.052
				c33.054,33.692,77.085,52.255,123.983,52.269c0.017,0,0.034,0,0.052,0c26.246,0,51.474-5.702,74.983-16.949
				c16.476-7.882,36.098-4.62,48.832,8.114l144.722,144.72c6.581,6.581,15.332,10.206,24.639,10.206
				c9.306,0,18.057-3.625,24.64-10.207C505.381,474.224,505.381,452.118,491.796,438.532z M477.654,473.668
				c-2.805,2.804-6.533,4.348-10.498,4.348c-3.965,0-7.693-1.544-10.497-4.348l-144.721-144.72
				c-11.937-11.936-27.961-18.224-44.258-18.224c-9.261,0-18.611,2.032-27.348,6.211c-20.795,9.948-43.116,14.991-66.352,14.991
				c-0.015,0-0.033,0-0.047,0c-41.486-0.012-80.449-16.446-109.712-46.275C34.94,255.803,19.244,216.5,20.027,174.982
				C21.598,91.712,90.66,23.967,173.979,23.967c84.983,0,152.611,66.535,153.96,151.473c0.336,21.2-3.552,41.786-11.56,61.187
				c-9.72,23.554-4.418,50.356,13.509,68.283l147.765,147.763C483.441,458.462,483.441,467.88,477.654,473.668z"
                />
                <path
                  d="M173.98,54.652c-67.985,0-123.295,55.31-123.295,123.295s55.31,123.295,123.295,123.295s123.295-55.31,123.295-123.295
				S241.965,54.652,173.98,54.652z M173.98,281.242c-56.957,0-103.295-46.338-103.295-103.295
				c0-56.957,46.338-103.295,103.295-103.295s103.295,46.338,103.295,103.295S230.937,281.242,173.98,281.242z"
                />
                <path
                  d="M207.418,91.691c-10.661-4.135-21.911-6.232-33.438-6.232c-50.998,0-92.487,41.489-92.487,92.487
				c0,16.034,4.17,31.835,12.06,45.695c1.844,3.239,5.222,5.055,8.7,5.055c1.676,0,3.376-0.423,4.939-1.312
				c4.799-2.732,6.475-8.838,3.743-13.638c-6.176-10.85-9.441-23.229-9.441-35.8c0-39.969,32.518-72.487,72.487-72.487
				c9.043,0,17.859,1.642,26.204,4.879c5.15,1.996,10.942-0.559,12.94-5.707C215.122,99.482,212.567,93.689,207.418,91.691z"
                />
                <path
                  d="M237.497,110.721c-4.013-3.794-10.342-3.615-14.136,0.399c-3.793,4.013-3.615,10.343,0.399,14.136
				c5.491,5.19,10.119,11.167,13.755,17.765c1.823,3.306,5.241,5.175,8.767,5.175c1.631,0,3.287-0.401,4.818-1.243
				c4.836-2.666,6.597-8.748,3.931-13.585C250.395,124.955,244.496,117.335,237.497,110.721z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div className="flex flex-col w-full h-screen justify-center items-center gap-1 cursor-pointer">
        <p className="roboto-mono text-center text-sm sm:text-lg lg:text-xl lg:mb-6 lg:p-0 p-4">
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
            className="text-overlay-wrapper edu-vic-wa-nt-hand text-7xl sm:text-[8rem] lg:text-[11rem] font-[900] "
          >
            <BlurText
              text="Fullstack"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="transition-all duration-500 ease-in-out text-solid"
            />
            <BlurText
              text="Fullstack"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="transition-all duration-500 ease-in-out text-stroke"
            />
          </div>
          <div
            ref={TextDown}
            onMouseEnter={() => handleMouseEnterText("bawah")}
            className="text-overlay-wrapper oswald text-7xl sm:text-[8rem] lg:text-[11rem] font-[900] sm:tracking-[0.5rem] lg:tracking-[30px]"
          >
            <BlurText
              text="Developer"
              delay={200}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-stroke-no-hover transition-all duration-500 ease-in-out"
            ></BlurText>
            <BlurText
              text="Developer"
              delay={200}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="hidden transition-all duration-500 ease-in-out "
            ></BlurText>
          </div>
          <div className="flex flex-col text-center sm:flex-row sm:justify-between w-full text-sm md:gap-10 md:text-xl lg:text-2xl italic my-4 md:my-2 ">
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
        <div className="relative z-[200] flex flex-col text-center sm:flex-row gap-2 md:mt-10 text-sm md:text-lg">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={1}
            animateOpacity
          >
            <a
              href="https://wa.me/6282255187877?text=Halo%2C%20saya%20ingin%20membuat%20aplikasi%20web."
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" p-2 px-5 border-black transition-all duration-300 hover:shadow-2xl bg-black text-white border-2 cursor-pointer rounded-lg  hover:px-10">
                You need a website
              </div>
            </a>
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
            <a
              href="https://wa.me/6282255187877?text=Halo%2C%20saya%20ingin%20membuat%20aplikasi%20Android."
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 px-5 transition-all duration-300 hover:shadow-2xl bg-white border-black border-2 rounded-lg hover:px-10">
                You need a Mobile Apps
              </div>
            </a>
          </AnimatedContent>
        </div>
        <img
          className="relative sm:absolute w-[300px] sm:w-[400px] lg:w-[450px] bottom-0 z-[30] grayscale pointer-events-none mask-b-from-70% mask-b-to-95%"
          src={Image}
          alt="Andri"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></img>
      </div>
    </div>
  );
}
