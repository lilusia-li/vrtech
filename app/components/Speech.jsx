export default function Speech({ translations }) {
  const { speech: s } = translations;
  return (
    <section
      className="px-8 py-[4rem] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(0.742turn,rgba(172,198,244,1) 0%,rgba(223,232,255,0) 100%)",
      }}
    >
      {/* content container */}
      <div
        className="relative flex justify-end gap-x-[2rem] w-full m-auto
        max-w-[72.5rem] xl:max-w-[85rem]"
      >
        {/* background-robot */}
        <img
          src="/speech/robot.svg"
          width={698}
          className="absolute -left-5 -bottom-25  w-full
          max-w-[625px] xl:max-w-[698px]"
          aria-hidden
        />
        <div className="flex flex-col gap-[2rem] max-w-[35rem] justify-self-end">
          <h2 className="text-[2.5rem] font-medium first:mb-[1rem] leading-[1.3]">
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
