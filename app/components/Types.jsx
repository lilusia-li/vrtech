import clsx from "clsx";
import Button from "../reUseComponents/Button";

export default function Types({ translations, currentLocale }) {
  const { types: t } = translations;
  return (
    <section className="px-8 py-[7rem] relative">
      {/* background-images left */}
      <div
        className="absolute top-0 left-0 max-w-2/3 w-full h-full"
        style={{
          backgroundImage: "url(/types/bg-left.svg)",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      ></div>
      {/* background-images right */}
      <div
        className="absolute top-0 right-0 max-w-2/3 w-full h-full rotate-180"
        style={{
          backgroundImage: "url(/types/bg-right.svg)",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      ></div>

      {/* content container */}
      <div className="flex flex-col gap-y-[2rem] max-w-[85rem] w-full m-auto">
        <h2 className="text-accent text-[2.5rem] font-medium">{t.title}</h2>
        <ul className="grid grid-cols-2 gap-[2rem]">
          {t.list.map((type) => {
            return (
              <li
                key={type.name}
                className={clsx(
                  "flex flex-col gap-y-[2rem] pr-[4rem] rounded-[30px]",
                  {
                    "p-[2.5rem]": currentLocale === "en",
                    "p-[3.5rem]": currentLocale === "ru",
                  }
                )}
                style={{
                  backgroundImage:
                    "linear-gradient(0.459turn,rgba(238,241,255,0.8) 0%,rgba(219,227,249,1) 100%)",
                }}
              >
                <div className="flex flex-col gap-y-[0.8rem]">
                  <h3 className="text-black text-[1.875rem] font-medium">
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
                <ul className="flex flex-col gap-y-[1rem]">
                  {type.advantagesList.map((advantage) => {
                    return (
                      <li
                        key={advantage}
                        className="font-medium
                        px-[1.5rem]
                        py-[1rem]
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
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
