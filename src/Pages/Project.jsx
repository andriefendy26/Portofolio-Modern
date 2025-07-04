import React, { useState } from "react";
import { FaGithub, FaFilter, FaSearch } from "react-icons/fa";

// CardProject Component
// function CardProject({ img, title, subjudul, techStack, github, production }) {
//   return (
//     <div className="shadow-2xl shadow-gray-400 rounded-xl overflow-hidden w-96 hover:shadow-3xl transition-shadow duration-300">
//       {/* Image Section */}
//       <img src={img[0]} alt={title} className="w-full h-52 object-cover"></img>
//       <div className="p-5">
//         <h2 className="font-poppins tracking-wide text-gray-800 font-semibold">
//           {title}
//         </h2>
//         <p className="">{subjudul.substr(0, 70)}....</p>
//         <h2 className="mb-2 font-semibold mt-3">Tech Stack :</h2>
//         <div className="">
//           {techStack.map((item, i) => (
//             <span
//               className="text-sm mr-1 mb-1 inline-block roboto-mono p-1 px-2 text-white bg-gray-400 rounded-xl"
//               key={i}
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//       <div className="border-t-1 border-t-gray-300 p-2 py-5 grid grid-cols-2 gap-2 saira-semi-condensed-regular">
//         <a
//           className="p-2 border-1 border-gray-600 rounded text-center hover:bg-gray-100 transition-colors duration-200"
//           href={production}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           View Project
//         </a>
//         <a
//           className="flex items-center justify-center gap-2 bg-gray-700 text-center rounded-lg text-white p-2 hover:bg-gray-800 transition-colors duration-200"
//           href={github}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaGithub />
//           Code
//         </a>
//       </div>
//     </div>
//   );
// }
import CardProject from "../Component/Card/CardProject";

export default function ProjectPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projectData = [
    {
      img: [
        "Porto/c2ukaltara/thumbnail.png",
        "Porto/c2ukaltara/image.png",
        "Porto/c2ukaltara/image0.png",
        "Porto/c2ukaltara/image1.png",
        "Porto/c2ukaltara/image2.png",
      ],
      title: "Website Application C2UKALTARA.ID",
      subjudul:
        "Proyek ini merupakan website komprehensif untuk C2UKALTARA yang menggabungkan teknologi modern dengan kebutuhan bisnis yang kompleks. Website ini dirancang dengan arsitektur yang scalable dan user-friendly interface untuk mendukung berbagai aktivitas operasional organisasi.",
      github: "/",
      production: "https://c2ukaltara.id/",
      techStack: ["React vite", "Express Js", "Tailwind CSS","FaceApi.js"],
      category: "Web Development",
      date: "2024",
    },
    {
      img: [
        "Porto/cashiermate/image1.png",
        "Porto/cashiermate/image2.png",
        "Porto/cashiermate/image3.png",
      ],
      title: "Aplikasi berbasis Website dan Android",
      subjudul:
        "Aplikasi kasir yang dirancang khusus untuk UMKM dengan fitur cross-platform yang memungkinkan penggunaan baik di Android maupun web browser. Sistem ini membantu pemilik usaha kecil menengah dalam mengelola transaksi dan inventory dengan mudah.",
      github: "/",
      production: "dsdsd",
      techStack: ["React", "React Native", "Laravel"],
      category: "Mobile Development",
      date: "2024",
    },
    {
      img: [
        "Porto/rentalMobil/thumbnail.png",
        "Porto/rentalMobil/image1.png",
        "Porto/cashiermate/image2.png",
        "Porto/cashiermate/image3.png",
      ],
      title: "Aplikasi Website Rental Mobil",
      subjudul:
        "Aplikasi website ini di bangun sebagai media promosi untuk usaha rental mobil, memanagemen artikel serta mencatat transaksi",
      github: "/",
      production: "https://cvtujuhsembilanotorentcar.com/",
      techStack: ["Laravel", "Filament"],
      category: "Web Development",
      date: "2024",
    },
    {
      img: [
        "https://via.placeholder.com/400x300/3b82f6/ffffff?text=E-Commerce",
        "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Dashboard",
        "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Product",
      ],
      title: "E-Commerce Platform",
      subjudul:
        "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi, manajemen inventory, dan dashboard admin yang komprehensif. Mendukung multi-vendor dengan fitur review dan rating produk.",
      github: "/",
      production: "#",
      techStack: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      category: "Web Development",
      date: "2024",
    },
    {
      img: [
        "https://via.placeholder.com/400x300/10b981/ffffff?text=Learning+App",
        "https://via.placeholder.com/400x300/10b981/ffffff?text=Course",
        "https://via.placeholder.com/400x300/10b981/ffffff?text=Quiz",
      ],
      title: "Learning Management System",
      subjudul:
        "Aplikasi pembelajaran online dengan fitur video streaming, quiz interaktif, dan tracking progress siswa. Dilengkapi dengan sistem sertifikat digital dan forum diskusi.",
      github: "/",
      production: "#",
      techStack: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
      category: "Web Development",
      date: "2023",
    },
    {
      img: [
        "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Task+Manager",
        "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Calendar",
        "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Team",
      ],
      title: "Task Management Mobile App",
      subjudul:
        "Aplikasi mobile untuk manajemen tugas tim dengan fitur real-time collaboration, calendar integration, dan notification push. Mendukung offline mode dan sinkronisasi data.",
      github: "/",
      production: "#",
      techStack: ["React Native", "Firebase", "Redux"],
      category: "Mobile Development",
      date: "2023",
    },
    {
      img: [
        "https://via.placeholder.com/400x300/ef4444/ffffff?text=Analytics",
        "https://via.placeholder.com/400x300/ef4444/ffffff?text=Dashboard",
        "https://via.placeholder.com/400x300/ef4444/ffffff?text=Reports",
      ],
      title: "Business Analytics Dashboard",
      subjudul:
        "Dashboard analitik bisnis dengan visualisasi data real-time, laporan otomatis, dan insights prediktif. Terintegrasi dengan berbagai sumber data dan API eksternal.",
      github: "/",
      production: "#",
      techStack: ["React", "D3.js", "Python", "FastAPI"],
      category: "Data Science",
      date: "2023",
    },
    {
      img: [
        "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Booking+System",
        "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Calendar",
        "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Payment",
      ],
      title: "Hotel Booking System",
      subjudul:
        "Sistem reservasi hotel dengan fitur pencarian advanced, manajemen kamar, sistem pembayaran, dan integrasi dengan channel manager. Mendukung multi-bahasa dan mata uang.",
      github: "/",
      production: "#",
      techStack: ["Laravel", "Vue.js", "MySQL", "PayPal API"],
      category: "Web Development",
      date: "2023",
    },
    {
      img: [
        "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Inventory+App",
        "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Barcode",
        "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Stock",
      ],
      title: "Inventory Management App",
      subjudul:
        "Aplikasi manajemen inventory dengan fitur barcode scanning, tracking stock real-time, alert sistem, dan laporan inventory. Mendukung multiple warehouse dan supplier management.",
      github: "/",
      production: "#",
      techStack: ["Flutter", "Django", "PostgreSQL"],
      category: "Mobile Development",
      date: "2022",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Data Science",
  ];

  const filteredProjects = projectData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.subjudul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-36 bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="edu-vic-wa-nt-hand text-6xl mb-4 text-gray-800">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kumpulan proyek yang telah saya kerjakan menggunakan berbagai
            teknologi modern
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredProjects.length} of {projectData.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-8 xl:mx-32 lg:mx-12 justify-items-center">
          {filteredProjects.map((project, i) => (
            <CardProject
              key={i}
              img={project.img}
              title={project.title}
              subjudul={project.subjudul}
              techStack={project.techStack}
              github={project.github}
              production={project.production}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No projects found matching your search criteria.
            </p>
          </div>
        )}

        {/* Call to Action
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Get In Touch
          </button>
        </div> */}
      </div>
    </div>
  );
}
