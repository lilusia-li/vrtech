import { translations, locales, defaultLocale } from "@/lib/i18n.js";
import localFont from "next/font/local";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../globals.css";

const manrope = localFont({
  src: [
    {
      path: "../../fonts/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Manrope-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata() {
  return {
    title: "Чат-боты и AI-ассистенты для бизнеса в Казахстане | VR TECH",
    description:
      "Разрабатываем чат-ботов и AI-ассистентов под ключ: WhatsApp, Telegram, CRM. Помогаем бизнесу автоматизировать заявки, поддержку и продажи.",
    keywords: [
      "ИИ ассистенты, автоматизация бизнеса, искусственный интеллект, чат-боты, бизнес-боты, Казахстан, vrtech",
    ],
    // icons: {
    //   icon: [
    //     {
    //       url: "/favicon/favicon-32x32.png",
    //       type: "image/png",
    //       sizes: "32x32",
    //     },
    //     {
    //       url: "/favicon/favicon-16x16.png",
    //       type: "image/png",
    //       sizes: "16x16",
    //     },
    //     { url: "/favicon/favicon.ico" },
    //   ],
    //   apple: [
    //     {
    //       url: "/favicon/apple-touch-icon.png",
    //       type: "image/png",
    //       sizes: "180x180",
    //     },
    //   ],
    //   other: [
    //     {
    //       rel: "android-chrome",
    //       url: "/favicon/android-chrome-192x192.png",
    //       type: "image/png",
    //       sizes: "192x192",
    //     },
    //     {
    //       rel: "android-chrome",
    //       url: "/favicon/android-chrome-512x512.png",
    //       type: "image/png",
    //       sizes: "512x512",
    //     },
    //   ],
    // },
    manifest: "/favicon/site.webmanifest",
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];

  return (
    <html lang={currentLocale}>
      <body
        className={`${manrope.variable} antialiased text-[1.25rem] font-normal`}
      >
        <Header translations={t}></Header>
        {children}
        <Footer translations={t}></Footer>
      </body>
    </html>
  );
}
