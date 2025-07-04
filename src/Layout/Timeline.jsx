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
    <div className="px-4 sm:px-6 lg:px-8 my-16">
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
                The origin
              </span>
              <h2 className="font-bold text-xl my-2">
                Acme was founded in Milan, Italy
              </h2>
              <p className="text-justify text-sm text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
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
              May, 2023
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
              May, 2023
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
                The origin
              </span>
              <h2 className="font-bold text-xl my-2">
                Acme was founded in Milan, Italy
              </h2>
              <p className="text-justify text-sm text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
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
                The origin
              </span>
              <h2 className="font-bold text-xl my-2">
                Acme was founded in Milan, Italy
              </h2>
              <p className="text-justify text-sm text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
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
              May, 2023
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
                  May, 2023
                </div>
              </div>
              <div className="text-start">
                <span className="text-lg font-semibold roboto-mono">
                  The origin
                </span>
                <h2 className="font-bold text-lg my-2">
                  Acme was founded in Milan, Italy
                </h2>
                <p className="text-justify text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
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
                  May, 2023
                </div>
              </div>
              <div className="text-start">
                <span className="text-lg font-semibold roboto-mono">
                  The origin
                </span>
                <h2 className="font-bold text-lg my-2">
                  Acme was founded in Milan, Italy
                </h2>
                <p className="text-justify text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
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
                  May, 2023
                </div>
              </div>
              <div className="text-start">
                <span className="text-lg font-semibold roboto-mono">
                  The origin
                </span>
                <h2 className="font-bold text-lg my-2">
                  Acme was founded in Milan, Italy
                </h2>
                <p className="text-justify text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
