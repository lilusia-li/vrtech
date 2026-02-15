"use client";

import { useState } from "react";

export default function Clients({ translations }) {
  const { clients: c } = translations;

  const pictureArr = [];
  for (let i = 1; i <= 18; i++) {
    pictureArr.push(`/clients/${i}.svg`);
  }

  const [slide, setSlide] = useState(0);

  const imageCount = 6;
  const slides = [];

  for (let i = 0; i < pictureArr.length; i++) {
    if (i * imageCount <= pictureArr.length - 1)
      slides.push(pictureArr.slice(i * imageCount, (i + 1) * imageCount));
  }

  const currentSlide = slides[slide];

  return (
    <section className="px-8 py-[3rem] md:py-[6rem] bg-[#d0defc]">
      {/* content container */}
      <div
        className="w-full m-auto
        flex flex-col gap-y-[2rem]
        max-w-[72.5rem] xl:max-w-[85rem]"
      >
        <h2
          className="font-medium
          text-[1.625rem] md:text-[2.5rem]"
        >
          {c.title}
        </h2>

        <div className="relative min-h-[67px] flex">
          <button
            onClick={() => {
              setSlide((curSlide) => {
                return curSlide === 0 ? slides.length - 1 : curSlide - 1;
              });
            }}
            className="absolute -left-7 top-1/2 -translate-y-1/2"
          >
            <img
              src="/slider/arrow_right.svg"
              className="w-[10px] md:w-[17px] rotate-180"
            />
          </button>

          <button
            onClick={() => {
              setSlide((curSlide) => {
                return curSlide === slides.length - 1 ? 0 : curSlide + 1;
              });
            }}
            className="absolute -right-7 top-1/2 -translate-y-1/2"
          >
            <img
              src="/slider/arrow_right.svg"
              className="w-[10px] md:w-[17px]"
            />
          </button>

          <ul
            className="grid gap-[1rem] m-auto
            grid-cols-2 sm:grid-cols-3 
            justify-items-center items-center
            lg:flex lg:justify-between lg:w-full"
          >
            {currentSlide.map((picture) => {
              return (
                <li key={picture}>
                  <img
                    src={picture}
                    width={190}
                    height={67}
                    className="rounded-[10px]
                    max-w-[125px] sm:max-w-[170px] lg:max-w-[140px] xl:max-w-[180px]"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
