import clsx from "clsx";

export default function Stages({ translations }) {
  const { stages: s } = translations;
  const stages = [
    {
      id: "audit",
      imageSrc: "/stages/audit.svg",
    },
    {
      id: "training",
      imageSrc: "/stages/training.svg",
    },
    {
      id: "development",
      imageSrc: "/stages/development.svg",
    },
    {
      id: "integration",
      imageSrc: "/stages/integration.svg",
    },
    {
      id: "testing",
      imageSrc: "/stages/testing.svg",
    },
    {
      id: "support",
      imageSrc: "/stages/support.svg",
    },
  ];
  return (
    <section
      className="px-8 py-[7rem]"
      style={{
        backgroundImage: "url(/stages/bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* content container */}
      <div
        className="flex flex-col gap-y-[3rem] w-full m-auto
        max-w-[72.5rem] xl:max-w-[85rem] "
      >
        <h2 className="text-accent text-[2.5rem] font-medium">{s.title}</h2>
        <ul className="flex flex-col gap-y-[3rem]">
          {stages.map((stage, index) => {
            return (
              <li
                key={stage.id}
                className={clsx(
                  "flex gap-x-[2rem]\
                  justify-between items-center",
                  {
                    "flex-row-reverse": index % 2 === 1,
                  }
                )}
              >
                <img
                  src={`${stage.imageSrc}`}
                  alt=""
                  aria-hidden="true"
                  className="w-[570px] xl:w-[605px] 
                  h-[488px] xl:h-[518px]"
                />
                <div className="flex flex-col gap-y-[2rem] ">
                  <h3 className="text-[1.5625rem] font-medium">
                    {s.list[stage.id].name}
                  </h3>
                  <div className="max-w-[35rem]">
                    <p className="">{s.list[stage.id].text}</p>
                    <p className="italic">{s.list[stage.id].italic}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
