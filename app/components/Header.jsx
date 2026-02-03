"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header({ translations }) {
  const { header: h } = translations;

  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "ru";

  const navigation = [
    {
      key: "ai-assistants",
      url: `/${currentLocale}/ai`,
      title: `${h.nav.pageOne}`,
    },
    {
      key: "voicebot",
      url: `/${currentLocale}/voicebot`,
      title: `${h.nav.pageTwo}`,
    },
  ];

  const switchLocale = (newLocale) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <header className="max-w-[89rem] w-full max-h-16 px-8 m-auto flex justify-between">
      <div className="flex max-w-[38rem] w-full justify-between">
        {/* Область логотипа */}
        <div className="flex flex-col items-end">
          <div className="-mt-[5px] max-w-[231px] max-h-[45px]">
            <img src="/header/logo.svg" alt="Логотип vrtech" />
          </div>
          <div className="flex items-center">
            <div className="font-normal text-xs">{h.resident}</div>
            <div className="max-w-[96px] max-h-[25px]">
              <img src="/header/logo_resident.svg" alt="Логотип astana hub" />
            </div>
          </div>
        </div>

        {/* Область навигации */}
        <nav className="flex max-w-[17rem] gap-x-[2rem] justify-between items-center">
          {navigation.map((navObj) => {
            return (
              <Link className="shrink-0" key={navObj.key} href={navObj.url}>
                <p
                  className={clsx({ "font-semibold": pathname === navObj.url })}
                >
                  {navObj.title}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex gap-x-[4rem] items-center">
        <a href={`tel:${h.validPhone}`} className="font-bold text-[1.125rem]">
          {h.phone}
        </a>
        <div className="flex gap-x-[1rem]">
          {["ru", "en"].map((locale) => {
            return (
              <button
                onClick={() => {
                  currentLocale === locale ? "" : switchLocale(locale);
                }}
                className={clsx("font-bold text-[1.125rem] max-h-[2rem] ", {
                  "text-[#219be3]": locale === currentLocale,
                  "cursor-pointer": locale !== currentLocale,
                })}
              >
                {locale.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
