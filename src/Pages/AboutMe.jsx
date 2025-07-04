import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCode,
  FaMobile,
  FaDatabase,
  FaServer,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLanguage,
  FaDesktop,
  FaCloud,
  FaRocket,
  FaCog,
  FaPalette,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technicalSkills = [
    { name: "Frontend Development", icon: <FaCode /> },
    { name: "Backend Development", icon: <FaServer /> },
    { name: "Mobile Development", icon: <FaMobile /> },
    { name: "Database Management", icon: <FaDatabase /> },
    { name: "Cloud Services", icon: <FaCloud /> },
    { name: "DevOps", icon: <FaCog /> },
    { name: "UI/UX Design", icon: <FaPalette /> },
    { name: "System Architecture", icon: <FaDesktop /> },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <FaLightbulb /> },
    { name: "Team Leadership", icon: <FaUsers /> },
    { name: "Project Management", icon: <FaRocket /> },
    { name: "Security Awareness", icon: <FaShieldAlt /> },
  ];

  const experiences = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Freelance",
      description:
        "Mengembangkan aplikasi web dan mobile untuk berbagai klien dengan teknologi modern seperti React, React Native, dan Laravel.",
      achievements: [
        "10+ Proyek Selesai",
        "100% Client Satisfaction",
        "Cross-platform Development",
      ],
      type: "freelance",
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Tech Startup",
      description:
        "Membangun sistem e-commerce dan aplikasi manajemen inventory dengan arsitektur yang scalable dan user-friendly.",
      achievements: [
        "E-commerce Platform",
        "Inventory Management",
        "Team Leadership",
      ],
      type: "fulltime",
    },
    {
      year: "2022",
      title: "Junior Developer",
      company: "Local Agency",
      description:
        "Fokus pada pengembangan frontend dan pembelajaran teknologi backend untuk meningkatkan skill development.",
      achievements: [
        "Frontend Mastery",
        "Backend Learning",
        "Project Management",
      ],
      type: "parttime",
    },
  ];

  const techStack = [
    "React",
    "React Native",
    "Laravel",
    "Node.js",
    "Vue.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Flutter",
    "Docker",
    "AWS",
    "TypeScript",
    "GraphQL",
    "Redis",
    "Nginx",
    "Git",
    "Jest",
  ];

  const personalInfo = [
    {
      icon: <FaGraduationCap />,
      label: "Education",
      value: "Computer Engineering",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Kalimantan Utara, Indonesia",
    },
    {
      icon: <FaCalendarAlt />,
      label: "Experience",
      value: "3+ Years Development",
    },
    { icon: <FaLanguage />, label: "Languages", value: "Indonesian, English" },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-900 transition-all duration-300 cursor-pointer"
          ></div>
        ))}
      </div>

      {/* Hero Section - Full Screen Split */}
      <div className="min-h-screen flex">
        {/* Left Side - Black */}
        <div className="w-1/2 bg-black text-white flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
          </div>

          <div className="text-center z-10">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center text-6xl text-black mb-8 mx-auto">
              👨‍💻
            </div>
            <h1 className="text-5xl font-bold mb-4">Andri Efendy</h1>
            <p className="text-xl text-gray-300">Full Stack Developer</p>
          </div>
        </div>

        {/* Right Side - White */}
        <div className="w-1/2 bg-white flex items-center justify-center p-12">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">About Me</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate developer dengan fokus pada inovasi dan kualitas. Saya
              menciptakan solusi digital yang tidak hanya fungsional, tetapi
              juga memberikan pengalaman pengguna yang luar biasa.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg"
                >
                  <div className="text-gray-900">{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section - Masonry Layout */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kombinasi keahlian teknis dan soft skills yang mendukung
              pengembangan solusi digital yang komprehensif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl group-hover:bg-gray-700 transition-colors duration-300">
                        {skill.icon}
                      </div>
                    </div>
                    <h4 className="text-center font-medium text-gray-900">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Soft Skills
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium text-gray-900">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section - Vertical Cards */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-16 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`flex ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-bold text-gray-900 bg-gray-200 px-3 py-1 rounded-full">
                            {exp.year}
                          </span>
                          <span className="text-sm text-gray-500">
                            {exp.company}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-start">
                          {exp.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack - Minimalist Grid */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gray-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-700 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-gray-600 text-lg">
              Tools dan teknologi yang saya kuasai dalam pengembangan
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-6xl mx-auto">
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

                    {/* Tech name */}
                    <span className="relative z-10 block">{tech}</span>

                    {/* Hover indicator */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                      <div className="absolute inset-0 bg-gray-900 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Categories */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCode className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Frontend
                </h3>
                <p className="text-sm text-gray-600">
                  React, Vue.js, TypeScript, Tailwind CSS
                </p>
              </div>

              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaServer className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Backend
                </h3>
                <p className="text-sm text-gray-600">
                  Node.js, Laravel, Express.js, GraphQL
                </p>
              </div>

              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaDatabase className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Database
                </h3>
                <p className="text-sm text-gray-600">
                  MongoDB, PostgreSQL, Redis
                </p>
              </div>
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

      {/* Stats Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Mari berkolaborasi dan wujudkan ide digital Anda menjadi kenyataan
            dengan solusi yang inovatif dan berkualitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold">
              Start a Project
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
