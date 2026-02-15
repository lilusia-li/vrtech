"use client";

import clsx from "clsx";
import Button from "../reUseComponents/Button";
import Opportunities from "./Opportunities";

export default function Hero({ translations, currentLocale }) {
  const { hero: h } = translations;

  const getTitle = () => {
    if (currentLocale === "ru") {
      return (
        <h1
          className="text-accent font-semibold
          text-[1.625rem] md:text-[2.625rem]"
        >
          {h.sectionTitle}
        </h1>
      );
    }

    return (
      <h1
        className="text-black font-semibold
        text-[1.625rem] md:text-[2.625rem]"
      >
        <p>
          <span className="text-accent">{h.sectionTitle.part_1_blue}</span>
          {h.sectionTitle.part_2}
        </p>
        <p>{h.sectionTitle.part_3}</p>
        <p>
          {h.sectionTitle.part_4}
          <span className="text-accent">{h.sectionTitle.part_5_blue}</span>
        </p>
      </h1>
    );
  };
  const getAdditionalText = () => {
    if (currentLocale === "ru") {
      return (
        <p
          className="text-[0.6875rem] sm:text-[1.125rem]
          lg:max-w-[27rem]"
        >
          <span>{h.additionalText.part_1}</span>
          <span className="text-accent">{h.additionalText.part_blue}</span>
          <span>{h.additionalText.part_2}</span>
        </p>
      );
    }
    return null;
  };

  return (
    <section className="px-[0.1rem] lg:px-8 py-[3rem] md:py-[6rem]">
      {/* content container */}
      <div
        className="relative w-full m-auto
        max-w-[72.5rem] xl:max-w-[85rem] 
        flex flex-col 
        gap-y-[3rem] md:gap-y-[4rem] lg:gap-y-[6rem] xl:gap-y-[7rem]
        max-lg:text-center
        items-center lg:items-start"
      >
        {/* background gradient */}
        <div
          aria-hidden
          className="absolute w-[982px] h-[930px] -translate-1/2
          left-0 top-1/2 z-0
          hidden lg:block"
          style={{
            backgroundImage: "url(/hero/bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* content */}
        <div
          className="max-w-[39rem] flex flex-col leading-[1.3]
          gap-y-[1rem] md:gap-y-[2rem] xl:gap-y-[4.4rem] z-10 
          items-center lg:items-start"
        >
          {getTitle()}

          <div>
            {h.description.map((descriptionPart) => {
              return (
                <p
                  className={clsx({
                    "text-black font-semibold\
                    text-[1rem] md:text-[1.75rem] lg:text-[1.875rem]":
                      currentLocale === "ru",
                    "text-[1.375rem]": currentLocale === "en",
                  })}
                  key={descriptionPart}
                >
                  {descriptionPart}
                </p>
              );
            })}
          </div>

          <Button
            style="lg:self-start min-w-[22rem]
            max-md:order-last
            px-[0.5rem] py-[1.2rem] md:py-[1.6rem]
            text-[1rem] md:text-[1.25rem]"
          >
            {h.buttonLabel}
          </Button>

          {getAdditionalText()}
        </div>

        {/* background robot */}
        <div
          className="relative lg:absolute lg:right-0 lg:z-0
          -top-5 lg:top-15 xl:-top-20
          w-[261px] h-[245px] md:w-[502px] md:h-[475px] lg:w-[486px] xl:w-[616px]"
          style={{
            backgroundImage: "url(/hero/robot.svg)",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden
        >
          <div
            className="absolute right-1/2  translate-x-1/2 bg-white
            -bottom-40 md:-bottom-20 lg:-bottom-5
            w-[294px] h-[73px] xl:w-[330px] xl:h-[153px]"
            style={{ boxShadow: "10px 10px 100px 100px rgba(255,255,255,1)" }}
          ></div>
        </div>

        <Opportunities
          translations={translations}
          currentLocale={currentLocale}
        ></Opportunities>
      </div>
    </section>
  );
}
