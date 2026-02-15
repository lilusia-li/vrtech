export default function Cases({ translations }) {
  const { cases: c } = translations;

  const images = [
    "/cases/Pro_Online_Academy.jpg",
    "/cases/Atamura_Group.png",
    "/cases/All-Line.png",
    "/cases/Navien.png",
  ];

  return (
    <section
      className="px-8 py-[4rem]"
      style={{
        backgroundImage:
          "linear-gradient(0.248turn,rgba(251,251,253,1) 0%,rgba(235,240,253,1) 100%)",
      }}
    >
      {/* content container */}
      <div
        className="flex flex-col gap-y-[4rem] w-full m-auto
        max-w-[72.5rem] xl:max-w-[85rem]"
      >
        <h2 className="text-accent text-[2.5rem] font-medium">{c.title}</h2>
        <ul className="grid grid-cols-2 gap-x-[2rem] gap-y-[4rem]">
          {c.list.map((item, index) => {
            return (
              <li
                key={item.picture.title}
                className="flex flex-col gap-y-[2rem]"
              >
                <div
                  className="flex flex-col justify-between min-h-[416px] px-[1.5rem] py-[2.5rem]
                  text-white font-medium
                  rounded-[30px]"
                  style={{
                    backgroundImage: `url(${images[index]}), linear-gradient(0.459turn, rgba(238, 241, 255, 0.8) 0%, rgb(219, 227, 249) 100%)`,
                    backgroundSize: "100% auto",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div>
                    <h3 className="text-[2.5rem] font-semibold">
                      {item.picture.title}
                    </h3>
                    <p className="text-[1.375rem]">
                      {item.picture.description}
                    </p>
                  </div>

                  <ul className="flex flex-col items-start gap-y-[1rem]">
                    {item.picture.points.map((point) => {
                      return (
                        <li
                          key={point}
                          className="text-[0.875rem] py-[0.5rem] px-[1rem]
                          rounded-[15px] border-[#b3dbf2]
                          bg-accent/50"
                        >
                          {point}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">{item.goal}</h4>
                  <p>{item.goalDescription}</p>
                </div>
                <div>
                  <h4 className="font-semibold">{item.solution}</h4>
                  <ul>
                    {item.solutionDescription.map((item) => {
                      return (
                        <li key={item} className="list-disc ml-[20px]">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
