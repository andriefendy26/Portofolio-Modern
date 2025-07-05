import React from "react";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaReact,
  FaMobile,
  FaLaravel,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiMysql,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiRedis,
} from "react-icons/si";

export default function TechStack() {
  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "React Native", icon: <FaMobile className="text-blue-500" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    // { name: "Redis", icon: <SiRedis className="text-red-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  return (
    <div>
      {/* Tech Stack - Minimalist Grid */}
      <div className="py-20  relative overflow-hidden">
        {/* Background Pattern */}

        <div className="container mx-auto px-4 relative z-10">
          <div data-aos="fade-right" className="text-center mb-16">
            <h2 className="edu-vic-wa-nt-hand text-5xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="roboto-mono text-gray-600 text-lg">
              Tools dan teknologi yang di kuasai dalam pengembangan
            </p>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto mt-4"></div> */}
          </div>

          <div data-aos="fade-left" className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <div className="relative bg-white border border-gray-200 px-6 py-3 rounded-xl text-sm font-medium text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                    {/* Floating effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-20"></div>

                    {/* Tech name with icon */}
                    <div className="relative z-10 flex items-center gap-2">
                      <span className="group-hover:text-white transition-colors duration-300">
                        {tech.icon}
                      </span>
                      <span>{tech.name}</span>
                    </div>

                    {/* Hover indicator
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                      <div className="absolute inset-0 bg-gray-900 rounded-full animate-ping"></div>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
