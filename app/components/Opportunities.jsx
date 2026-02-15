import clsx from "clsx";

export default function Opportunities({ translations, currentLocale }) {
  const { opportunities: o } = translations;

  const opportunities = [
    {
      name: "integrations",
      imageSrc: "/opportunities/integrations.svg",
    },
    {
      name: "workload",
      imageSrc: "/opportunities/workload.svg",
    },
    {
      name: "answers",
      imageSrc: "/opportunities/answers.svg",
    },
  ];

  return (
    <section
      className="flex flex-col items-center gap-y-[1rem] sm:gap-y-[2rem] z-10
      max-sm:max-w-[25rem] max-lg:max-w-[38.75rem]"
    >
      <div className="flex flex-col gap-y-[0.7rem] sm:gap-y-[2rem]">
        <h2
          className={clsx("text-accent font-medium", {
            "text-[1rem] sm:text-[1.625rem] md:text-[2.5rem]":
              currentLocale === "en",
            "text-[1rem] sm:text-[1.625rem] text-[1.875rem]":
              currentLocale === "ru",
          })}
        >
          {o.title}
        </h2>

        {o.description.map((paragraph, index) => {
          return (
            <p
              key={paragraph}
              className="text-[0.6875rem] sm:text-[1.125rem] lg:text-[1.25rem]"
            >
              {index === 0 ? (
                <span className="font-bold">{o.description_strong || ""}</span>
              ) : (
                ""
              )}

              {paragraph}
            </p>
          );
        })}
      </div>

      <ul
        className="flex justify-around gap-[1rem]
        flex-col lg:flex-row
        md:mt-[1rem] max-lg:max-w-fit lg:w-full"
      >
        {opportunities.map((opportunity) => {
          return (
            <li
              key={opportunity.name}
              className="flex flex-1 items-center lg:justify-center
              text-start lg:text-center lg:max-w-[20.8rem]
              
              font-medium text-[0.75rem] sm:text-[1.1875rem] lg:text-[1.25rem]

              bg-[length:45px_45px] lg:bg-[length:75px_75px]
              bg-left lg:bg-top 
              bg-no-repeat
              min-h-[45px]
              
              max-lg:pl-[60px] lg:pt-[82px]
              max-lg:whitespace-normal"
              style={{
                backgroundImage: `url(${opportunity.imageSrc})`,
              }}
            >
              <span className="font-bold">
                {o.list[opportunity.name].strong}
              </span>
              {o.list[opportunity.name].text}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
