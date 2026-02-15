"use client";

import { useState } from "react";
import clsx from "clsx";
import Button from "../reUseComponents/Button";

export default function Types({ translations, currentLocale }) {
  const { types: t } = translations;

  const [slide, setSlide] = useState(0);
  const slides = t.list.map((item) => {
    return [item];
  });
  const currentSlide = slides[slide];

  return (
    <section className="px-[0.1rem] lg:px-8 py-[3rem] md:py-[6rem] relative bg-[#fdfdfd]">
      {/* background-images left */}
      <div
        className="max-lg:hidden absolute top-0 left-0 max-w-2/3 w-full h-full z-0"
        style={{
          backgroundImage: "url(/types/bg-left.svg)",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      ></div>
      {/* background-images right */}
      <div
        className="max-lg:hidden absolute top-0 right-0 max-w-2/3 w-full h-full rotate-180 z-0"
        style={{
          backgroundImage: "url(/types/bg-right.svg)",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      ></div>

      {/* content container */}
      <div
        className="relative flex flex-col gap-y-[2rem] w-full m-auto
        max-w-[72.5rem] xl:max-w-[85rem]
        z-10"
      >
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

        <h2
          className="text-accent font-medium
          text-[1.625rem] sm:text-[2.5rem]
          leading-[1.3] mr-[90px]"
        >
          {t.title}
        </h2>

        {/* vw < 1024px slider */}
        <ul className="grid lg:hidden px-2 gap-[2rem]">
          {currentSlide.map((type) => {
            return (
              <li
                key={type.name}
                className={clsx(
                  `flex flex-col rounded-[30px]
                  gap-y-[1rem] md:gap-y-[2rem]
                  p-[1rem] sm:p-[2.5rem] sm:pr-[1rem] md:p-[3rem] md:pr-[1.5rem] xl:pr-[4rem]
                  leading-[1.3]`,
                  {
                    "xl:p-[2.5rem]": currentLocale === "en",
                    "xl:p-[3.5rem]": currentLocale === "ru",
                  }
                )}
                style={{
                  backgroundImage:
                    "linear-gradient(0.459turn,rgba(238,241,255,0.8) 0%,rgba(219,227,249,1) 100%)",
                }}
              >
                <div className="flex flex-col gap-y-[0.8rem]">
                  <h3
                    className="text-black text-[1.375rem] sm:text-[1.875rem] font-medium
                    max-lg:min-h-0 max-xl:min-h-[4.4rem]"
                  >
                    {type.name}
                  </h3>
                  <p
                    className={clsx("text-[0.875rem] sm:text-[1.125rem]", {
                      "max-w-[30.625rem]": currentLocale === "ru",
                    })}
                  >
                    {type.description}
                  </p>
                </div>

                <h4 className="text-black font-semibold mt-[0.5rem] text-[1rem] sm:text-[1.25rem]">
                  {type.subtitle}
                </h4>
                <div className="flex flex-col justify-between gap-y-[2rem] h-full">
                  <ul className="flex flex-col gap-y-[1rem]">
                    {type.advantagesList.map((advantage) => {
                      return (
                        <li
                          key={advantage}
                          className="flex items-center
                          font-medium text-[0.875rem] sm:text-[1.25rem]
                          px-[0.5rem] py-[1rem] sm:px-[1.5rem] sm:py-[1.25rem] md:py-[1.5rem]
                          rounded-[20px] border-[#b3dbf2]
                          bg-white"
                        >
                          {advantage}
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    style="self-start min-w-[19rem] sm:min-w-[24.5rem]
                    px-[0.5rem] py-[0.95rem] sm:py-[1.45rem]
                    text-[1rem] sm:text-[1.25rem]"
                  >
                    {type.buttonLabel}
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>

        {/* vw >= 1024px */}
        <ul className="grid grid-cols-2 max-lg:hidden gap-[2rem]">
          {t.list.map((type) => {
            return (
              <li
                key={type.name}
                className={clsx(
                  `flex flex-col gap-y-[2rem] rounded-[30px]
                  p-[2.5rem] pr-[1rem] xl:pr-[4rem]
                  leading-[1.15]`,
                  {
                    "xl:p-[2.5rem]": currentLocale === "en",
                    "xl:p-[3.5rem]": currentLocale === "ru",
                  }
                )}
                style={{
                  backgroundImage:
                    "linear-gradient(0.459turn,rgba(238,241,255,0.8) 0%,rgba(219,227,249,1) 100%)",
                }}
              >
                <div className="flex flex-col gap-y-[0.8rem]">
                  <h3
                    className="text-black text-[1.875rem] font-medium
                  max-xl:min-h-[4.4rem]"
                  >
                    {type.name}
                  </h3>
                  <p
                    className={clsx("text-[1.125rem] ", {
                      "max-w-[30.625rem]": currentLocale === "ru",
                    })}
                  >
                    {type.description}
                  </p>
                </div>

                <h4 className="text-black font-semibold mt-[0.5rem]">
                  {type.subtitle}
                </h4>
                <div className="flex flex-col justify-between gap-y-[2rem] h-full">
                  <ul className="flex flex-col gap-y-[1rem]">
                    {type.advantagesList.map((advantage) => {
                      return (
                        <li
                          key={advantage}
                          className="flex items-center font-medium
                          min-h-[3.9rem]
                          px-[1.5rem] py-[1rem]
                          rounded-[20px] border-[#b3dbf2]
                          bg-white"
                        >
                          {advantage}
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    style="self-start min-w-[24.5rem]
                  px-[0.5rem] py-[1.25rem]
                  text-[1.25rem]"
                  >
                    {type.buttonLabel}
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
