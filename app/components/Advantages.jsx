"use client";

import { useState } from "react";

export default function Advantages({ translations }) {
  const { advantages: a } = translations;
  const advantages = [
    {
      name: "speed",
      imageSrc: "/advantages/speed.svg",
    },
    {
      name: "schedule",
      imageSrc: "/advantages/schedule.svg",
    },
    {
      name: "trainability",
      imageSrc: "/advantages/trainability.svg",
    },
    {
      name: "integrations",
      imageSrc: "/advantages/integrations.svg",
    },
    {
      name: "personality",
      imageSrc: "/advantages/personality.svg",
    },
    {
      name: "analitic",
      imageSrc: "/advantages/analitic.svg",
    },
  ];

  const [slide, setSlide] = useState(0);
  const slides = advantages.map((item) => {
    return [item];
  });
  const currentSlide = slides[slide];

  return (
    <section
      className="px-[0.1rem] lg:px-8 py-[3rem] md:py-[6rem] bg-[#fdfdfd]"
      style={{
        backgroundImage: "url(/advantages/bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* content container */}
      <div
        className="relative flex flex-col gap-y-[1rem] w-full m-auto
        max-w-[72.5rem] xl:max-w-[85rem]"
      >
        <h2
          className="text-accent font-medium
          text-[1.625rem] sm:text-[2.5rem]
          leading-[1.3] mr-[90px]"
        >
          {a.title}
        </h2>

        <button
          onClick={() => {
            setSlide((curSlide) => {
              return curSlide === 0 ? slides.length - 1 : curSlide - 1;
            });
          }}
          className="absolute right-7 sm:right-12 top-0 lg:hidden"
        >
          <img
            src="/slider/arrow_blue_right.svg"
            className="w-[29px] sm:w-[40px] rotate-180"
          />
        </button>

        <button
          onClick={() => {
            setSlide((curSlide) => {
              return curSlide === slides.length - 1 ? 0 : curSlide + 1;
            });
          }}
          className="absolute right-0 top-0 lg:hidden"
        >
          <img
            src="/slider/arrow_blue_right.svg"
            className="w-[29px] sm:w-[40px]"
          />
        </button>

        {/* vw < 1024px slider */}
        <ul className="grid lg:hidden gap-[2rem] px-2 justify-items-center">
          {currentSlide.map((advantage) => {
            return (
              <li
                key={advantage.name}
                className="lg:min-h-[16.8rem] w-full
                p-[1rem] max-xl:p-[2rem]
                rounded-[30px]"
                style={{
                  alignItems: "top",
                  boxShadow: "4px 4px 30px 0px rgba(235, 222, 253, 1)",
                }}
              >
                <p
                  className="lg:mt-[1.5rem] text-center pt-[6rem]
                  text-[1rem]
                  max-xl:whitespace-normal"
                  style={{
                    backgroundImage: `url(${advantage.imageSrc})`,
                    backgroundSize: "80px 80px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                  }}
                >
                  <span className="font-bold">
                    {a.list[advantage.name].strong}
                  </span>
                  {a.list[advantage.name].text}
                </p>
              </li>
            );
          })}
        </ul>

        {/* vw >= 1024px */}
        <ul className="grid max-lg:hidden grid-cols-3 gap-[2rem] px-2 justify-items-center">
          {advantages.map((advantage) => {
            return (
              <li
                key={advantage.name}
                className="lg:min-h-[16.8rem] w-full
                p-[1rem] max-xl:p-[2rem]
                rounded-[30px]"
                style={{
                  alignItems: "top",
                  boxShadow: "4px 4px 30px 0px rgba(235, 222, 253, 1)",
                }}
              >
                <p
                  className="lg:mt-[1.5rem] text-center pt-[6rem]
                  text-[0.9rem]
                  max-xl:whitespace-normal"
                  style={{
                    backgroundImage: `url(${advantage.imageSrc})`,
                    backgroundSize: "80px 80px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                  }}
                >
                  <span className="font-bold">
                    {a.list[advantage.name].strong}
                  </span>
                  {a.list[advantage.name].text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
