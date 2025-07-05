import React, { useEffect, useRef, useState } from "react";

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(
              (prev) => new Set([...prev, entry.target.dataset.index])
            );
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    observerRef.current = observer;

    // Observe all timeline items
    const timelineItems = document.querySelectorAll("[data-timeline-item]");
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (index) => visibleItems.has(index.toString());

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="edu-vic-wa-nt-hand text-5xl lg:text-6xl mb-5 md:text-center">
        Timeline
      </h2>

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:block">
        <div className="grid grid-cols-9">
          {/* stack 1 */}
          <div
            className={`col-span-4 flex justify-end relative transition-all duration-700 ease-out ${
              isVisible(1)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            data-timeline-item
            data-index="1"
          >
            <div className="w-80 text-end">
              <span className="text-xl font-semibold roboto-mono">
                Pendidikan Tinggi
              </span>
              <h2 className="font-bold text-xl my-2">
                Memulai pendidikan Tinggi di Universitas Borneo Tarakan
              </h2>
              <p className="text-justify text-sm text-gray-500">
                Pada tahun 2021, saya resmi memulai pendidikan tinggi di
                Universitas Borneo Tarakan, mengambil jurusan Teknik Komputer.
                Di sinilah saya mulai mendalami dasar-dasar teknologi,
                pemrograman, dan sistem komputer yang menjadi fondasi penting
                dalam perjalanan karier saya di bidang teknologi.
              </p>
            </div>
          </div>
          <div className="cols-span-1 relative justify-center flex flex-col items-center w-full h-full">
            <div className="bg-gray-400 h-full w-1"></div>
            <div
              className={`absolute w-6 h-6 bg-gray-600 text-center rounded-full text-white transition-all duration-500 ease-out ${
                isVisible(1) ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: isVisible(1) ? "300ms" : "0ms" }}
            >
              1
            </div>
          </div>
          <div
            className={`col-span-4 flex justify-start items-center transition-all duration-700 ease-out ${
              isVisible(1)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: isVisible(1) ? "200ms" : "0ms" }}
          >
            <div className="rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic">
              May, 2021
            </div>
          </div>

          {/* stack 2 */}
          <div
            className={`col-span-4 flex justify-end items-center transition-all duration-700 ease-out ${
              isVisible(2)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: isVisible(2) ? "200ms" : "0ms" }}
          >
            <div className="rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic">
              November, 2021
            </div>
          </div>
          <div className="cols-span-1 relative justify-center flex flex-col items-center w-full h-full">
            <div className="bg-gray-400 h-full w-1"></div>
            <div
              className={`absolute w-6 h-6 bg-gray-600 text-center rounded-full text-white transition-all duration-500 ease-out ${
                isVisible(2) ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: isVisible(2) ? "300ms" : "0ms" }}
            >
              2
            </div>
          </div>
          <div
            className={`col-span-4 flex justify-start relative transition-all duration-700 ease-out ${
              isVisible(2)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            data-timeline-item
            data-index="2"
          >
            <div className="w-80 text-start">
              <span className="text-xl font-semibold roboto-mono">
                Bekerja Full Time
              </span>
              <h2 className="font-bold text-xl my-2">
                Bekerja Fulltime di salah satu coffeshop
              </h2>
              <p className="text-justify text-sm text-gray-500">
                Bekerja sebagai barista dengan tanggung jawab meracik berbagai
                jenis minuman kopi dan non-kopi, melayani pelanggan secara
                langsung, serta menjaga kebersihan dan kenyamanan area kerja.
                Pengalaman ini mengasah kemampuan komunikasi, ketelitian, dan
                pelayanan pelanggan dalam lingkungan kerja cepat dan dinamis.
              </p>
            </div>
          </div>
          {/* stack 3 */}
          <div
            className={`col-span-4 flex justify-end relative transition-all duration-700 ease-out ${
              isVisible(3)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            data-timeline-item
            data-index="3"
          >
            <div className="w-80 text-end">
              <span className="text-xl font-semibold roboto-mono">
                Kursus Fullstack Web
              </span>
              <h2 className="font-bold text-xl my-2">
                Mengikuti Kursus Fullstack Web di Codepolitan
              </h2>
              <p className="text-justify text-sm text-gray-500">
                Aktif mengikuti kursus online Fullstack Web Development di
                Codepolitan dengan fokus pada penguasaan teknologi modern
                seperti HTML, CSS, JavaScript, React, Express JS, dan MySQL.
                Kursus ini membekali saya dengan keterampilan membangun aplikasi
                web dari sisi frontend hingga backend secara terstruktur dan
                aplikatif.
              </p>
            </div>
          </div>
          <div className="cols-span-1 relative justify-center flex flex-col items-center w-full h-full">
            <div className="bg-gray-400 h-full w-1"></div>
            <div
              className={`absolute w-6 h-6 bg-gray-600 text-center rounded-full text-white transition-all duration-500 ease-out ${
                isVisible(3) ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: isVisible(3) ? "300ms" : "0ms" }}
            >
              3
            </div>
          </div>
          <div
            className={`col-span-4 flex justify-start items-center transition-all duration-700 ease-out ${
              isVisible(3)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: isVisible(3) ? "200ms" : "0ms" }}
          >
            <div className="rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic">
              Juni, 2023
            </div>
          </div>

          {/* stack 4 */}
          <div
            className={`col-span-4 flex justify-end items-center transition-all duration-700 ease-out ${
              isVisible(2)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: isVisible(2) ? "200ms" : "0ms" }}
          >
            <div className="rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic">
              Oct, 2023
            </div>
          </div>
          <div className="cols-span-1 relative justify-center flex flex-col items-center w-full h-full">
            <div className="bg-gray-400 h-full w-1"></div>
            <div
              className={`absolute w-6 h-6 bg-gray-600 text-center rounded-full text-white transition-all duration-500 ease-out ${
                isVisible(2) ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: isVisible(2) ? "300ms" : "0ms" }}
            >
              4
            </div>
          </div>
          <div
            className={`col-span-4 flex justify-start relative transition-all duration-700 ease-out ${
              isVisible(2)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            data-timeline-item
            data-index="2"
          >
            <div className="w-80 text-start">
              <span className="text-xl font-semibold roboto-mono">
                Pengabdian
              </span>
              <h2 className="font-bold text-xl my-2">
                Pengabdian di SMK 2 Tarakan
              </h2>
              <p className="text-justify text-sm text-gray-500">
                Berperan dalam peningkatan pemahaman dasar-dasar pengembangan
                web kepada siswa SMK. Melibatkan 30 siswa dalam sesi interaktif
                dan praktik langsung HTML, CSS, dan JavaScript.
              </p>
            </div>
          </div>

          {/* stack 5 */}
          <div
            className={`col-span-4 flex justify-end relative transition-all duration-700 ease-out ${
              isVisible(3)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            data-timeline-item
            data-index="3"
          >
            <div className="w-80 text-end">
              <span className="text-xl font-semibold roboto-mono">
                Magang Mandiri
              </span>
              <h2 className="font-bold text-xl my-2">
                Membuat Aplikasi Website Coastal Clean Up
              </h2>
              <p className="text-justify text-sm text-gray-500">
                Website ini menggunakan React dan TailwindCSS sebagai teknologi
                untuk membangun Antarmukan Serta Express JS dan MySQL pada sisi
                Backendnya, website ini digunakan untuk pencatatan data
                mahasiswa seperti data sampah, E-Logbook, bertia dan sudah di
                lengkapi fitur Face Recognition.
              </p>
            </div>
          </div>
          <div className="cols-span-1 relative justify-center flex flex-col items-center w-full h-full">
            <div className="bg-gray-400 h-full w-1"></div>
            <div
              className={`absolute w-6 h-6 bg-gray-600 text-center rounded-full text-white transition-all duration-500 ease-out ${
                isVisible(3) ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: isVisible(3) ? "300ms" : "0ms" }}
            >
              5
            </div>
          </div>
          <div
            className={`col-span-4 flex justify-start items-center transition-all duration-700 ease-out ${
              isVisible(3)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: isVisible(3) ? "200ms" : "0ms" }}
          >
            <div className="rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic">
              November, 2024
            </div>
          </div>

          {/* stack 6 */}
          <div
            className={`col-span-4 flex justify-end items-center transition-all duration-700 ease-out ${
              isVisible(2)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: isVisible(2) ? "200ms" : "0ms" }}
          >
            <div className="rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic">
              Juli, 2025
            </div>
          </div>
          <div className="cols-span-1 relative justify-center flex flex-col items-center w-full h-full">
            <div className="bg-gray-400 h-full w-1"></div>
            <div
              className={`absolute w-6 h-6 bg-gray-600 text-center rounded-full text-white transition-all duration-500 ease-out ${
                isVisible(2) ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: isVisible(2) ? "300ms" : "0ms" }}
            >
              6
            </div>
          </div>
          <div
            className={`col-span-4 flex justify-start relative transition-all duration-700 ease-out ${
              isVisible(2)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            data-timeline-item
            data-index="4"
          >
            <div className="w-80 text-start">
              <span className="text-xl font-semibold roboto-mono">
                Mengakhiri Pendidikan Tinggi
              </span>
              <h2 className="font-bold text-xl my-2">
                Mengakhiri pendidikan Tinggi di Universitas Borneo Tarakan
              </h2>
              <p className="text-justify text-sm text-gray-500">
                Menyelesaikan studi di Program Studi Teknik Komputer dan
                berhasil menyusun skripsi yang berfokus pada pengembangan
                aplikasi berbasis web dengan integrasi Face Recognition. Proyek
                akhir ini mencerminkan komitmen terhadap penerapan teknologi
                dalam dunia pendidikan dan sistem informasi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (sm and below) */}
      <div className="block md:hidden">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-400"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {/* Item 1 */}
            <div
              className={`relative pl-16 transition-all duration-700 ease-out ${
                isVisible(1)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              data-timeline-item
              data-index="1"
            >
              <div
                className={`absolute left-3 w-6 h-6 bg-gray-600 text-center rounded-full text-white text-sm flex items-center justify-center transition-all duration-500 ease-out ${
                  isVisible(1) ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: isVisible(1) ? "300ms" : "0ms" }}
              >
                1
              </div>
              <div className="mb-3">
                <div className="inline-block rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic text-sm">
                  May, 2021
                </div>
              </div>
              <div className="text-start">
                <span className="text-lg font-semibold roboto-mono">
                  Pendidikan Terakhir
                </span>
                <h2 className="font-bold text-lg my-2">
                  Memulai pendidikan Tinggi di Universitas Borneo Tarakan
                </h2>
                <p className="text-justify text-sm text-gray-500">
                  Pada tahun 2021, saya resmi memulai pendidikan tinggi di
                  Universitas Borneo Tarakan, mengambil jurusan Teknik Komputer.
                  Di sinilah saya mulai mendalami dasar-dasar teknologi,
                  pemrograman, dan sistem komputer yang menjadi fondasi penting
                  dalam perjalanan karier saya di bidang teknologi.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className={`relative pl-16 transition-all duration-700 ease-out ${
                isVisible(2)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              data-timeline-item
              data-index="2"
            >
              <div
                className={`absolute left-3 w-6 h-6 bg-gray-600 text-center rounded-full text-white text-sm flex items-center justify-center transition-all duration-500 ease-out ${
                  isVisible(2) ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: isVisible(2) ? "300ms" : "0ms" }}
              >
                2
              </div>
              <div className="mb-3">
                <div className="inline-block rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic text-sm">
                  November, 2021
                </div>
              </div>
              <div className="text-start">
                <span className="text-lg font-semibold roboto-mono">
                  Bekerja Full Time
                </span>
                <h2 className="font-bold text-lg my-2">
                  Bekerja Fulltime di salah satu coffeshop
                </h2>
                <p className="text-justify text-sm text-gray-500">
                  Bekerja sebagai barista dengan tanggung jawab meracik berbagai
                  jenis minuman kopi dan non-kopi, melayani pelanggan secara
                  langsung, serta menjaga kebersihan dan kenyamanan area kerja.
                  Pengalaman ini mengasah kemampuan komunikasi, ketelitian, dan
                  pelayanan pelanggan dalam lingkungan kerja cepat dan dinamis.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className={`relative pl-16 transition-all duration-700 ease-out ${
                isVisible(3)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              data-timeline-item
              data-index="3"
            >
              <div
                className={`absolute left-3 w-6 h-6 bg-gray-600 text-center rounded-full text-white text-sm flex items-center justify-center transition-all duration-500 ease-out ${
                  isVisible(3) ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: isVisible(3) ? "300ms" : "0ms" }}
              >
                3
              </div>
              <div className="mb-3">
                <div className="inline-block rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic text-sm">
                  Juni, 2023
                </div>
              </div>
              <div className="text-start">
                <span className="text-lg font-semibold roboto-mono">
                  Kursus Fullstack Web
                </span>
                <h2 className="font-bold text-lg my-2">
                  Mengikuti Kursus Fullstack Web di Codepolitan
                </h2>
                <p className="text-justify text-sm text-gray-500">
                  Aktif mengikuti kursus online Fullstack Web Development di
                  Codepolitan dengan fokus pada penguasaan teknologi modern
                  seperti HTML, CSS, JavaScript, React, Express JS, dan MySQL.
                  Kursus ini membekali saya dengan keterampilan membangun
                  aplikasi web dari sisi frontend hingga backend secara
                  terstruktur dan aplikatif.
                </p>
              </div>
            </div>
            {/* Item 4 */}
            <div
              className={`relative pl-16 transition-all duration-700 ease-out ${
                isVisible(3)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              data-timeline-item
              data-index="3"
            >
              <div
                className={`absolute left-3 w-6 h-6 bg-gray-600 text-center rounded-full text-white text-sm flex items-center justify-center transition-all duration-500 ease-out ${
                  isVisible(3) ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: isVisible(3) ? "300ms" : "0ms" }}
              >
                4
              </div>
              <div className="mb-3">
                <div className="inline-block rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic text-sm">
                  Oct, 2023
                </div>
              </div>
              <div className="text-start">
                <span className="text-lg font-semibold roboto-mono">
                  Pengabdian
                </span>
                <h2 className="font-bold text-lg my-2">
                  Pengabdian di SMK 2 Tarakan
                </h2>
                <p className="text-justify text-sm text-gray-500">
                  Berperan dalam peningkatan pemahaman dasar-dasar pengembangan
                  web kepada siswa SMK. Melibatkan 30 siswa dalam sesi
                  interaktif dan praktik langsung HTML, CSS, dan JavaScript.
                </p>
              </div>
            </div>
            {/* Item 5 */}
            <div
              className={`relative pl-16 transition-all duration-700 ease-out ${
                isVisible(3)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              data-timeline-item
              data-index="3"
            >
              <div
                className={`absolute left-3 w-6 h-6 bg-gray-600 text-center rounded-full text-white text-sm flex items-center justify-center transition-all duration-500 ease-out ${
                  isVisible(3) ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: isVisible(3) ? "300ms" : "0ms" }}
              >
                5
              </div>
              <div className="mb-3">
                <div className="inline-block rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic text-sm">
                  November, 2024
                </div>
              </div>
              <div className="text-start">
                <span className="text-lg font-semibold roboto-mono">
                  Magang Mandiri
                </span>
                <h2 className="font-bold text-lg my-2">
                  Membuat Aplikasi Website Coastal Clean Up
                </h2>
                <p className="text-justify text-sm text-gray-500">
                  Website ini menggunakan React dan TailwindCSS sebagai
                  teknologi untuk membangun Antarmukan Serta Express JS dan
                  MySQL pada sisi Backendnya, website ini digunakan untuk
                  pencatatan data mahasiswa seperti data sampah, E-Logbook,
                  bertia dan sudah di lengkapi fitur Face Recognition.
                </p>
              </div>
            </div>
            {/* Item 6 */}
            <div
              className={`relative pl-16 transition-all duration-700 ease-out ${
                isVisible(3)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              data-timeline-item
              data-index="3"
            >
              <div
                className={`absolute left-3 w-6 h-6 bg-gray-600 text-center rounded-full text-white text-sm flex items-center justify-center transition-all duration-500 ease-out ${
                  isVisible(3) ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: isVisible(3) ? "300ms" : "0ms" }}
              >
                6
              </div>
              <div className="mb-3">
                <div className="inline-block rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic text-sm">
                  Juli, 2025
                </div>
              </div>
              <div className="text-start">
                <span className="text-lg font-semibold roboto-mono">
                  Mengakhiri Pendidikan Tinggi
                </span>
                <h2 className="font-bold text-lg my-2">
                  Mengakhiri pendidikan Tinggi di Universitas Borneo Tarakan
                </h2>
                <p className="text-justify text-sm text-gray-500">
                  Menyelesaikan studi di Program Studi Teknik Komputer dan
                  berhasil menyusun skripsi yang berfokus pada pengembangan
                  aplikasi berbasis web dengan integrasi Face Recognition.
                  Proyek akhir ini mencerminkan komitmen terhadap penerapan
                  teknologi dalam dunia pendidikan dan sistem informasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
