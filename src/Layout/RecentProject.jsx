import React from "react";
import CardProject from "../Component/Card/CardProject";
import { FaGithub } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function RecentProject() {
  const data = [
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
      techStack: ["React vite", "Express Js", "Tailwind CSS"],
      date: "",
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
      date: "",
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
      date: "",
    },
  ];
  return (
    <div className="my-10">
      <h2 className="edu-vic-wa-nt-hand text-6xl mb-10 text-center">
        Recent Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-14 md:mx-20 lg:mx-24">
        {data.map((items, i) => (
          <CardProject
            key={i}
            img={items.img}
            title={items.title}
            subjudul={items.subjudul}
            techStack={items.techStack}
            github={items.github}
            production={items.production}
          ></CardProject>
        ))}
      </div>

      <Link
        className="flex mt-14 shadow-xl w-60 hover:shadow-2xl hover:border-gray-600 hover:border-2 hover:text-gray-800 hover:bg-transparent hover:shadow-black hover:scale-105 duration-300 mx-auto place-content-center items-center justify-center gap-2 bg-gray-700 text-center rounded-lg text-white p-2"
        href={"/project"}
      >
        {/* <FaGithub /> */}
        Selengkapnya
        <MdOutlineKeyboardDoubleArrowRight />
      </Link>
    </div>
  );
}
