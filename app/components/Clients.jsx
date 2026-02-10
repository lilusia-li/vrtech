import Slider from "../reUseComponents/Slider";

export default function Clients({ translations }) {
  const { clients: c } = translations;

  const data = {
    pictureArr: [],
  };
  for (let i = 1; i <= 18; i++) {
    data.pictureArr.push(`/clients/${i}.svg`);
  }

  return (
    <section className="px-8 py-[6rem] bg-[#d0defc] flex flex-col gap-y-[2rem]">
      {/* content container */}
      <div className="max-w-[85rem] w-full m-auto">
        <h2 className="text-[2.5rem] font-medium">{c.title}</h2>
      </div>
      <Slider data={data}></Slider>
    </section>
  );
}
