export default function Numbers({ translations }) {
  const { numbers: n } = translations;

  return (
    <section className="px-8 py-[7rem]">
      {/* content container */}
      <div className="flex flex-col gap-y-[2rem] max-w-[85rem] w-full m-auto">
        <h2 className="text-accent text-[2.5rem] font-medium">{n.title}</h2>
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
