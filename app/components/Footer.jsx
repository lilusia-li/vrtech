"use client";

import Link from "next/link";
import Button from "../reUseComponents/Button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Footer({ translations }) {
  const { footer: f, phone } = translations;

  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "ru";

  const navigation = [
    {
      key: "ai-assistants",
      url: `/${currentLocale}/ai`,
      title: `${f.forClients.firstPage}`,
    },
    {
      key: "voicebot",
      url: `/${currentLocale}/voicebot`,
      title: `${f.forClients.secondPage}`,
    },
  ];

  const mbAfterTitle = "mb-[0.9rem]";
  const titleHeight = "h-[2rem]";

  return (
    <footer className="mt-[50rem] flex justify-between max-w-[89rem] w-full m-auto px-8 pt-[3rem] pb-[5rem]">
      {/* Первая колонка */}
      <div className="flex flex-col text-[0.875rem] text-[#616162]">
        <div className={`max-w-[10.4rem] ${titleHeight} ${mbAfterTitle}`}>
          <img src="/header/logo.svg" alt="Логотип vrtech" />
        </div>
        <p className="mb-[0.3rem]">{f.postscriptum}</p>
        <p className="mb-[1rem]">{f.rights}</p>
        <p className="mb-[0.3rem]">{f.TOO}</p>
        <p className="mb-[4rem]">{f.BIN}</p>
        <div className="flex items-center">
          <div className="font-normal text-[0.75rem] text-[#000000]">
            {f.resident}
          </div>
          <div className="max-w-[96px] max-h-[25px]">
            <img src="/header/logo_resident.svg" alt="Logo astana hub" />
          </div>
        </div>
      </div>

      {/* Вторая колонка */}
      <div className="flex flex-col">
        <p
          className={`text-[#1e1e1e] text-[1.25rem] font-semibold ${titleHeight} ${mbAfterTitle}`}
        >
          {f.forClients.title}
        </p>
        <ul>
          {navigation.map((navObj) => {
            return (
              <li key={navObj.key}>
                <Link href={navObj.url}>
                  <p
                    className={clsx("mb-[1rem] text-[1rem]", {
                      "cursor-text": pathname === navObj.url,
                    })}
                  >
                    {navObj.title}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-x-[0.8rem]">
          {[
            {
              name: "email",
              href: "mailto:hello@vrtech.kz?subject=Запрос%20информации&body=Здравствуйте,%20меня%20интересует%20подключение%20ваших%20услуг",
              svgPath: "/footer/email_gray.svg",
            },
            {
              name: "whatsApp",
              href: "https://api.whatsapp.com/send/?phone=77784444556&text=Здравствуйте,%20интересует%20подключение%20бота&type=phone_number&app_absent=0",
              svgPath: "/footer/whatsApp_gray.svg",
            },
            {
              name: "telegram",
              href: "https://t.me/vrtechtg",
              svgPath: "/footer/telegram_gray.svg",
            },
          ].map((messenger) => {
            return (
              <a key={messenger.name} href={messenger.href}>
                <img
                  src={messenger.svgPath}
                  alt={`${messenger.name} icon`}
                  width="32"
                  height="32"
                ></img>
              </a>
            );
          })}
        </div>
      </div>

      {/* Третья колонка */}
      <address className="flex flex-col gap-y-[1.5rem] text-[1rem] not-italic">
        <div>
          <p
            className={`text-[#1e1e1e] text-[1.25rem] font-semibold ${titleHeight} ${mbAfterTitle}`}
          >
            {f.salesDepartment.title}
          </p>
          <a href={`mailto:${f.salesDepartment.email}`}>
            {f.salesDepartment.email}
          </a>
        </div>

        <div>
          <p
            className={`text-[#1e1e1e] text-[1.25rem] font-semibold ${titleHeight} ${mbAfterTitle}`}
          >
            {f.supportService.title}
          </p>
          <a href={`mailto:${f.supportService.email}`}>
            {f.supportService.email}
          </a>
        </div>

        <div>
          <p
            className={`text-[#1e1e1e] text-[1.25rem] font-semibold ${titleHeight} ${mbAfterTitle}`}
          >
            {f.oficeTitle}
          </p>
          <p>{f.oficeAdress}</p>
        </div>
      </address>

      {/* Четвертая колонка */}
      <div className="flex flex-col gap-y-[0.9rem] items-end font-medium">
        <a
          href={`tel:${phone.validPhone}`}
          className="font-bold text-[2.1875rem] leading-[1]"
        >
          {phone.phone}
        </a>

        <time
          dateTime={`${f.validWorkSchedule}`}
          className="text-[1rem] text-[#616162]"
        >
          {f.workSchedule}
        </time>

        <Button style="max-w-[17rem] max-h-[3.7rem] text-[1.25rem] mb-[1.8rem] mt-[1.2rem]">
          {f.buttonLabel}
        </Button>
        {[
          {
            title: `${f.publicOffer}`,
            href: "",
          },
          { title: `${f.privacyPolicy}`, href: "" },
        ].map((element) => {
          return (
            <a
              className="text-[1rem] text-[#219be3]"
              key={element.title}
              href={element.href}
            >
              {element.title}
            </a>
          );
        })}
      </div>
    </footer>
  );
}
