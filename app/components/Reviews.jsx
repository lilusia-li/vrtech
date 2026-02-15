"use client";

import { useState } from "react";

export default function Reviews({ translations }) {
  const { reviews: r } = translations;

  const cardsData = [
    {
      imagePath: "/reviews/proOnlineAcademy.png",
      ...r.cards.proOnlineAcademy,
    },
    {
      imagePath: "/reviews/atamuraGroup.svg",
      ...r.cards.atamuraGroup,
    },
    {
      imagePath: "/reviews/allLine.svg",
      ...r.cards.allLine,
    },
    {
      imagePath: "/reviews/navien.svg",
      ...r.cards.navien,
    },
  ];

  const [indexFirstCard, setIndexFirstCard] = useState(0);

  const cardsCount = 4;
  const cards = [];

  for (let i = 0; i < cardsData.length; i++) {
    if (i + cardsCount > cardsData.length) {
      const tempArr = [
        ...cardsData.slice(i),
        ...cardsData.slice(0, i + cardsCount - cardsData.length),
      ];
      cards.push(tempArr);
    } else if (i + cardsCount === cardsData.length) {
      cards.push(cardsData.slice(i));
    } else cards.push(cardsData.slice(i, i + cardsCount));
  }
  console.log(cards);
  const currentSlide = cards[indexFirstCard];

  return (
    <section className="px-8 py-[3.5rem] bg-[#fbfbfd] overflow-x-hidden">
      {/* content container */}
      <div
        className="w-full m-auto
        flex flex-col gap-y-[2rem]
        max-w-[72.5rem] xl:max-w-[85rem]"
      >
        <h2 className="text-accent text-[2.5rem] font-medium">{r.title}</h2>
        <div className="relative">
          <button
            onClick={() => {
              setIndexFirstCard((curIndexFirstCard) => {
                return curIndexFirstCard === 0
                  ? cards.length - 1
                  : curIndexFirstCard - 1;
              });
            }}
            className="absolute -left-12 top-1/2 -translate-y-1/2"
          >
            <img
              src="/reviews/arrow_right.svg"
              alt="Влево"
              className="w-[65px] rotate-180"
            />
          </button>

          <button
            onClick={() => {
              setIndexFirstCard((curIndexFirstCard) => {
                return curIndexFirstCard === cards.length - 1
                  ? 0
                  : curIndexFirstCard + 1;
              });
            }}
            className="absolute -right-12 top-1/2 -translate-y-1/2"
          >
            <img
              src="/reviews/arrow_right.svg"
              alt="Вправо"
              className="w-[65px]"
            />
          </button>

          <ul className="flex gap-x-[1rem] justify-between">
            {currentSlide.map((card) => {
              return (
                <li
                  key={card.title}
                  className="max-w-[329px] w-full min-h-[600px] p-[0.5rem] pt-[2rem]
                flex flex-col gap-y-[1.7rem] items-center
                rounded-[30px]
                text-center"
                  style={{
                    backgroundImage: `linear-gradient(0.39turn,rgba(238,241,255,1) 0%,rgba(219,227,249,1) 100%)`,
                  }}
                >
                  <h3
                    className="pt-[9rem] w-full
                  font-semibold text-[1.5625rem]"
                    style={{
                      backgroundImage: `url(${card.imagePath})`,
                      backgroundPosition: "top",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "119px 119px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[0.875rem] max-w-[13.625rem]">
                    {card.text}
                  </p>
                  <p className="font-semibold text-[1rem]">{card.author}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
