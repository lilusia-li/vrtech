import { defaultLocale, translations } from "@/lib/i18n";

export default async function HomePage({ params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];

  return <div>mainPage</div>;
}
