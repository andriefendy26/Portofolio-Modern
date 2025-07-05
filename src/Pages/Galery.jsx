import React, { useState } from "react";
import Masonry from "../Component/MasonryGrid/Masonry";
import AnimatedContent from "../Component/AnimateContent/AnimateContent";
// import gambar1 from "../assets/Galery/1.jpg"

export default function Galery() {
  const items = [
    {
      id: "1",
      img: "./Galery/24.jpg",
      url: "/",
      height: 400,
    },
    {
      id: "2",
      img: "./Galery/31.jpg",
      url: "/",
      height: 300,
    },
    {
      id: "3",
      img: "./Galery/3.jpg",
      url: "/",
      height: 400,
    },
    // {
    //   id: "4",
    //   img: "./Galery/4.jpg",
    //   url: "/",
    //   height: 500,
    // },
    {
      id: "5",
      img: "./Galery/5.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "6",
      img: "./Galery/6.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "7",
      img: "./Galery/7.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "8",
      img: "./Galery/19.jpg",
      url: "/",
      height: 550,
    },
    {
      id: "9",
      img: "./Galery/9.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "10",
      img: "./Galery/10.jpg",
      url: "/",
      height: 350,
    },
    // {
    //   id: "11",
    //   img: "./Galery/11.jpg",
    //   url: "/",
    //   height: 350,
    // },
    {
      id: "12",
      img: "./Galery/12.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "13",
      img: "./Galery/13.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "14",
      img: "./Galery/14.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "15",
      img: "./Galery/15.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "16",
      img: "./Galery/16.jpg",
      url: "/",
      height: 300,
    },
    {
      id: "17",
      img: "./Galery/17.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "18",
      img: "./Galery/18.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "19",
      img: "./Galery/8.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "20",
      img: "./Galery/20.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "21",
      img: "./Galery/21.jpg",
      url: "/",
      height: 600,
    },
    {
      id: "22",
      img: "./Galery/22.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "23",
      img: "./Galery/23.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "24",
      img: "./Galery/24.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "25",
      img: "./Galery/25.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "26",
      img: "./Galery/26.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "27",
      img: "./Galery/27.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "28",
      img: "./Galery/28.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "29",
      img: "./Galery/29.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "30",
      img: "./Galery/30.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "31",
      img: "./Galery/2.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "32",
      img: "./Galery/32.jpg",
      url: "/",
      height: 600,
    },
    {
      id: "33",
      img: "./Galery/33.jpg",
      url: "/",
      height: 350,
    },
    // {
    //   id: "34",
    //   img: "./Galery/34.jpg",
    //   url: "/",
    //   height: 350,
    // },
    {
      id: "35",
      img: "./Galery/35.jpg",
      url: "/",
      height: 350,
    },
    {
      id: "36",
      img: "./Galery/1.jpg",
      url: "/",
      height: 650,
    },
    {
      id: "37",
      img: "./Galery/11.jpg",
      url: "/",
      height: 650,
    },
    // {
    //   id: "38",
    //   img: "./Galery/37.jpg",
    //   url: "/",
    //   height: 650,
    // },
    {
      id: "39",
      img: "./Galery/38.jpg",
      url: "/",
      height: 500,
    },
    {
      id: "40",
      img: "./Galery/39.jpg",
      url: "/",
      height: 400,
    },
  ];

  const [selectedImage, setSelected] = useState();

  const header = {
    title: "Visual Highlights from Behind the Camera",
    deskripsi:
      "Setiap foto memiliki kisahnya sendiri — momen kecil yang mungkin luput dari perhatian, namun menyimpan emosi dan makna yang mendalam. Galeri ini bukan sekadar kumpulan gambar, melainkan potongan cerita dari balik layar: tatapan yang jujur, tawa spontan, detail sederhana yang membangun suasana. Di balik setiap jepretan, ada proses, interaksi, dan keheningan yang tertangkap oleh lensa, mengabadikan bukan hanya apa yang terlihat, tapi juga apa yang terasa.",
  };

  return (
    <>
       {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img src={selectedImage} alt="preview" className="max-w-sm md:max-w-2xl max-h-xl rounded-lg" />
        </div>
      )}
      <div className="container items-center flex flex-col lg:px-30 p-10">
        <div className=" mt-20 mb-10" onClick={() => setSelected("")}>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="ease.in"
            initialOpacity={0}
            animateOpacity
          >
            <h1 className="edu-vic-wa-nt-hand  text-4xl tracking-wider font-semibold">
              {header.title}
            </h1>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={2}
            ease="ease.in"
            initialOpacity={0}
            animateOpacity
          >
            <h2 className="saira-semi-condensed-regular tracking-wider font-semibold mt-3">
              {header.deskripsi}
            </h2>
          </AnimatedContent>
        </div>
        <Masonry
          items={items}
          ease="power3.out"
          duration={2.1}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
          // onClick={() => {console.log(items)}}
          selectedImage={(selectedImage) => setSelected(selectedImage)}
        />
      </div>
    </>
  );
}
