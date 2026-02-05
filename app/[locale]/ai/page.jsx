import Hero from "@/app/components/Hero";
import { defaultLocale, translations } from "@/lib/i18n";

export default async function AiPage({ params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];

  return (
    <div>
      <Hero translations={t}></Hero>
    </div>
  );
}
