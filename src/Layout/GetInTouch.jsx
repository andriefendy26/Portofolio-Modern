import React from "react";
import {
  FaCode,
  FaGitAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

export default function GetInTouch() {
  const connectWithMe = [
    {
      name: "Github",
      icon: <FaGithub className="text-black" />,
      link: "https://github.com/andriefendy26",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-purple-600" />,
      link: "https://www.instagram.com/andriefendyy/",
    },
    {
      name: "Tiktok",
      icon: <FaTiktok className="text-black" />,
      link: "https://www.tiktok.com/@andriefendyy",
    },
    {
      name: "LinkIn",
      icon: <FaLinkedin className="text-blue-600" />,
      link: "https://www.linkedin.com/in/andri-efendy-b962371b9",
    },
    {
      name: "CodeWars",
      icon: <FaCode className="text-orange-500" />,
      link: "https://www.codewars.com/users/andriefendy26",
    },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 m5-32 border-t-1 boder-gray-300 pt-10 ">
        <div className=" m-auto">
          <>
            <p className="roboto-mono">
              Mari berkolaborasi untuk proyek Anda 🚀
            </p>
            <p className="edu-vic-wa-nt-hand text-6xl md:text-6xl lg:text-7xl mt-8 text-center md:text-start">
              GetIn Touch
            </p>
          </>
          <div className="flex gap-3 mt-4 roboto-mono justify-center md:justify-start">
            <a
              href="/contact"
              className="inline-block cursor-pointer p-2 hover:bg-gray-600 hover:text-white duration-300 hover:scale-105 border-1 border-gray-700 rounded text-center"
            >
              Contact Me
            </a>
            <a
              href="/project"
              className="inline-block cursor-pointer hover:border-gray-600 hover:border-2 hover:text-gray-700 hover:bg-transparent hover:scale-105 duration-300 items-center justify-center gap-2 bg-gray-700 text-center rounded-lg text-white p-2 px-3"
            >
              View my Work
            </a>
          </div>
        </div>
        <div className="">
          <p className="roboto-mono text-center lg:text-left mt-10 md:mt-0">
            Connect with me:
          </p>
          <div className="flex gap-2 mt-4 flex-wrap justify-center lg:justify-start">
            {connectWithMe.map((items, i) => (
              <a href={items.link} target="_blank">
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
