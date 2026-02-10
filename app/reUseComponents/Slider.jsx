"use client";

import { useState } from "react";

export default function ({ data }) {
  const { pictureArr } = data;

  const [slide, setSlide] = useState(0);

  const imageCount = 6;
  const slides = [];

  for (let i = 0; i < pictureArr.length; i++) {
    if (i * imageCount <= pictureArr.length - 1)
      slides.push(pictureArr.slice(i * imageCount, (i + 1) * imageCount));
  }

  const currentSlide = slides[slide];

  return (
    <div className="relative min-h-[67px]">
      <button
        onClick={() => {
          setSlide((curSlide) => {
            return curSlide === 0 ? 2 : curSlide - 1;
          });
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2"
      >
        <img src="/slider/arrow_right.svg" className="w-[17px] rotate-180" />
      </button>
      {/* content container */}
      <div className="flex flex-col gap-y-[2rem] max-w-[85rem] w-full m-auto">
        <ul className="flex gap-x-[1rem] justify-between">
          {currentSlide.map((picture) => {
            return (
              <li key={picture}>
                <img
                  src={picture}
                  width={190}
                  height={67}
                  className="rounded-[10px]"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <button
        onClick={() => {
          setSlide((curSlide) => {
            return curSlide === 2 ? 0 : curSlide + 1;
          });
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        <img src="/slider/arrow_right.svg" className="w-[17px]" />
      </button>
    </div>
  );
}
