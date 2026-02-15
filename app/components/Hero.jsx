"use client";

import clsx from "clsx";
import Button from "../reUseComponents/Button";
import Opportunities from "./Opportunities";

export default function Hero({ translations, currentLocale }) {
  const { hero: h } = translations;

  const getTitle = () => {
    if (currentLocale === "ru") {
      return (
        <h1 className="text-accent text-[2.625rem] font-semibold">
          {h.sectionTitle}
        </h1>
      );
    }

    return (
      <h1 className="text-black text-[2.625rem] font-semibold">
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
        <p className="max-xl:max-w-[33rem]">
          <span>{h.additionalText.part_1}</span>
          <span className="text-accent">{h.additionalText.part_blue}</span>
          <span>{h.additionalText.part_2}</span>
        </p>
      );
    }
    return null;
  };

  return (
    <section className="px-8 pb-[5rem] pt-[6rem]">
      {/* content container */}
      <div
        className="relative w-full m-auto
        max-w-[72.5rem] xl:max-w-[85rem] 
        flex flex-col 
        gap-y-[6rem] xl:gap-y-[7rem]"
      >
        {/* background robot */}
        <div
          className="absolute w-[616px] h-[616px] right-0 -top-20 z-0"
          style={{ backgroundImage: "url(/hero/robot.svg)" }}
          aria-hidden
        >
          <div
            className="absolute right-1/2 bottom-0 translate-x-1/2 bg-white
            w-[373px] h-[92px] xl:w-[330px] xl:h-[153px]"
            style={{ boxShadow: "10px 10px 100px 100px rgba(255,255,255,1)" }}
          ></div>
        </div>

        {/* background gradient */}
        <div
          aria-hidden
          className="absolute w-[982px] h-[930px] -translate-1/2
          left-0 top-1/2 z-0"
          style={{
            backgroundImage: "url(/hero/bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* content */}
        <div
          className="max-w-[39rem] flex flex-col leading-[1.3]
          gap-y-[2rem] xl:gap-y-[4.4rem] z-10"
        >
          {getTitle()}

          <div>
            {h.description.map((descriptionPart) => {
              return (
                <p
                  className={clsx({
                    "text-black text-[1.875rem] font-semibold":
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
            style="self-start min-w-[22rem]
            px-[0.5rem] py-[1.5rem]
            text-[1.25rem]"
          >
            {h.buttonLabel}
          </Button>

          {getAdditionalText()}
        </div>

        <Opportunities
          translations={translations}
          currentLocale={currentLocale}
        ></Opportunities>
      </div>
    </section>
  );
}
