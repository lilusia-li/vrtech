export default function Speech({ translations }) {
  const { speech: s } = translations;
  return (
    <section className="px-8 py-[7rem]">
      {/* content container */}
      <div className="grid grid-cols-2 gap-x-[2rem] max-w-[85rem] w-full m-auto">
        <img
          src="/speech/robot.svg"
          width={698}
          className="justify-self-start"
        />
        <div className="flex flex-col gap-[2rem] max-w-[35rem] justify-self-end">
          <h2 className="text-[2.5rem] font-medium first:mb-[1rem]">
            {s.title}
          </h2>
          <p>
            {s.text.t_1}
            <span className="font-bold">{s.text.strong_1}</span>
            {s.text.t_2}
            <br />
            {s.text.t_3}
            <span className="font-bold">{s.text.strong_2}</span>
            {s.text.t_4}
          </p>
          <p>{s.text.t_5}</p>
          <p>
            {s.text.t_6}
            <span className="font-bold">{s.text.strong_3}</span>
            {s.text.t_7}
          </p>
        </div>
      </div>
    </section>
  );
}
