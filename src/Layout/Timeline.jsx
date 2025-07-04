import React from "react";

export default function Timeline() {
  return (
    <div className="">
      <h2 className="edu-vic-wa-nt-hand text-6xl mb-5 text-center">Timeline</h2>
      <div className="grid grid-cols-9">
        {/* stack 1 */}
        <div className="col-span-4 flex justify-end relative ">
          <div className="w-80 text-end">
            <span className="text-xl font-semibold roboto-mono">
              The origin
            </span>
            <h2 className="font-bold text-xl my-2">
              Acme was founded in Milan, Italy
            </h2>
            <p className="text-justify text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="cols-span-1 relative justify-center flex flex-col items-center w-full h-full ">
          <div className="bg-gray-400 h-full w-1"></div>
          <div className="absolute w-6 h-6 bg-gray-600 text-center rounded-full text-white">
            1
          </div>
        </div>
        <div className="col-span-4 flex justify-start items-center ">
          <div className="rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic ">
            May, 2023
          </div>
        </div>
        {/* stack 2 */}
        <div className="col-span-4 flex justify-end items-center ">
          <div className="rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic ">
            May, 2023
          </div>
        </div>
        <div className="cols-span-1 relative justify-center flex flex-col items-center w-full h-full ">
          <div className="bg-gray-400 h-full w-1"></div>
          <div className="absolute w-6 h-6 bg-gray-600 text-center rounded-full text-white">
            2
          </div>
        </div>
        <div className="col-span-4 flex justify-start relative ">
          <div className="w-80 text-start">
            <span className="text-xl font-semibold roboto-mono">
              The origin
            </span>
            <h2 className="font-bold text-xl my-2">
              Acme was founded in Milan, Italy
            </h2>
            <p className="text-justify text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

             {/* stack 1 */}
        <div className="col-span-4 flex justify-end relative ">
          <div className="w-80 text-end">
            <span className="text-xl font-semibold roboto-mono">
              The origin
            </span>
            <h2 className="font-bold text-xl my-2">
              Acme was founded in Milan, Italy
            </h2>
            <p className="text-justify text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="cols-span-1 relative justify-center flex flex-col items-center w-full h-full ">
          <div className="bg-gray-400 h-full w-1"></div>
          <div className="absolute w-6 h-6 bg-gray-600 text-center rounded-full text-white">
            3
          </div>
        </div>
        <div className="col-span-4 flex justify-start items-center ">
          <div className="rounded-full py-1 drop-shadow-lg px-3 bg-gray-400 font-bold italic ">
            May, 2023
          </div>
        </div>
      </div>
    </div>
  );
}
