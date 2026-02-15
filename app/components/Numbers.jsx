export default function Numbers({ translations }) {
  const { numbers: n } = translations;

  return (
    <section
      className="px-[0.1rem] lg:px-8 py-[3rem] md:py-[6rem]"
      style={{
        backgroundImage:
          "linear-gradient(0.742turn,rgba(235,240,253,1) 0%,rgba(251,251,253,0) 100%)",
      }}
    >
      {/* content container */}
      <div
        className="flex flex-col gap-y-[2rem] w-full m-auto
        max-w-[72.5rem] xl:max-w-[85rem] overflow-x-hidden"
      >
        <h2
          className="text-accent font-medium
          text-[1.625rem] sm:text-[2.5rem]"
        >
          {n.title}
        </h2>
        <ul className="flex justify-between gap-x-[2rem]">
          {n.list.map((elem) => {
            return (
              <li
                key={elem.num}
                className="flex flex-col gap-y-[1rem] text-black text-center "
              >
                <h3 className="font-semibold text-[1.875rem] min-w-max ">
                  {elem.num}
                </h3>
                <p className="whitespace-pre-line">{elem.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
