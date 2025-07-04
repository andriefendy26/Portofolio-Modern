import React from "react";
import {
  FaCode,
  FaGitAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import FallingText from "../Component/FallingText/Falling";

export default function GetInTouch() {
  const connectWithMe = [
    {
      name: "Github",
      icon: <FaGithub className="text-black" />,
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-purple-600" />,
    },
    {
      name: "Tiktok",
      icon: <FaTiktok className="text-black" />,
    },
    {
      name: "LinkIn",
      icon: <FaLinkedin className="text-blue-600" />,
    },
    {
      name: "CodeWars",
      icon: <FaCode className="text-orange-500" />,
    },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-2 mt-32 ">
        <div className=" m-auto">
          <p className="roboto-mono">Mari berkolaborasi untuk proyek Anda 🚀</p>
          <p className="edu-vic-wa-nt-hand text-8xl mt-8  ">GetIn Touch</p>
        </div>
        <div className="mx-auto ">
          <p className="roboto-mono ">Connect with me:</p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {connectWithMe.map((items, i) => (
              <div
                key={i}
                className="relative inline-block bg-white border border-gray-200 px-6 py-3 rounded-xl text-sm font-medium text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                {/* Floating effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-20"></div>

                {/* Tech name with icon */}
                <div className="relative z-10 flex items-center gap-2">
                  <span className="group-hover:text-white transition-colors duration-300">
                    {items.icon}
                  </span>
                  <span>{items.name}</span>
                </div>

                {/* Hover indicator */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <div className="absolute inset-0 bg-gray-900 rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <FallingText
        text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
        highlightWords={["React", "Bits", "animated", "components", "simplify"]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      /> */}
    </div>
  );
}
