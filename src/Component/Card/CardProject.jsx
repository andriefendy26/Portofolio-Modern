import React from "react";
import { FaGithub } from "react-icons/fa";

export default function CardProject({
  img,
  title,
  subjudul,
  techStack,
  github,
  production,
}) {
  return (
    <div className="duration-300 shadow-2xl shadow-gray-300 rounded-xl overflow-hidden flex flex-col h-full">
      <img src={img[0]} alt={title} className="w-full h-52 object-cover"></img>
      
      <div className="p-5 flex-grow flex flex-col">
        <h2 className="font-poppins tracking-wide text-gray-800 font-semibold">
          {title}
        </h2>
        <p className="">{subjudul.substr(0, 70)}....</p>
        <h2 className="mb-2 font-semibold mt-3">Tech Stack :</h2>
        
        <div className="flex-grow">
          {techStack.map((item, i) => (
            <span
              className="text-sm mr-1 mb-1 inline-block roboto-mono p-1 px-2 text-white bg-gray-400 rounded-xl"
              key={i}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      <div className="border-t-1 border-t-gray-300 p-2 py-5 grid grid-cols-2 gap-2 saira-semi-condensed-regular mt-auto">
        <a
          className="p-2 hover:bg-gray-800 hover:text-white duration-300 hover:scale-105 border-1 border-gray-700 rounded text-center"
          href={production}
        >
          View Project
        </a>
        <a
          className="flex hover:border-gray-600 hover:border-2 hover:text-gray-700 hover:bg-transparent hover:scale-105 duration-300 items-center justify-center gap-2 bg-gray-700 text-center rounded-lg text-white p-2"
          href={github}
        >
          <FaGithub />
          Code
        </a>
      </div>
    </div>
  );
}