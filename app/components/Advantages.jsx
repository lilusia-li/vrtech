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
  return (
    <section
      className="px-8 py-[7rem] bg-[fdfdfd]"
      style={{
        backgroundImage: "url(/opportunities/bg.jpg",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* content container */}
      <div className="flex flex-col gap-y-[1rem] max-w-[85rem] w-full m-auto">
        <h2 className="text-accent text-[2.5rem] font-medium">{a.title}</h2>
        <ul className="grid grid-cols-3 gap-[2rem]">
          {advantages.map((advantage) => {
            return (
              <li
                key={advantage.name}
                className="min-h-[16.8rem] px-[1rem] py-[1rem]
                rounded-[30px]"
                style={{
                  alignItems: "top",
                  boxShadow: "4px 4px 30px 0px rgba(235, 222, 253, 1)",
                }}
              >
                <p
                  className="mt-[1.5rem] text-center pt-[6rem]"
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
