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
    <section className="flex flex-col gap-y-[2rem]">
      <div className="flex flex-col gap-y-[1.5rem]">
        <h2 className="text-accent text-[2.5rem] font-medium">{o.title}</h2>

        {o.description.map((paragraph, index) => {
          return (
            <p key={paragraph}>
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

      <ul className="flex justify-around gap-x-[1rem]">
        {opportunities.map((opportunity, index) => {
          return (
            <li
              key={opportunity.name}
              className={clsx("pt-[82px] text-center max-w-[13.1rem]", {
                "max-w-[21rem]": index === 0,
              })}
              style={{
                backgroundImage: `url(${opportunity.imageSrc})`,
                backgroundPosition: "top",
                backgroundSize: "75px 75px",
                backgroundRepeat: "no-repeat",
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
