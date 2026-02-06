import Advantages from "@/app/components/Advantages";
import Hero from "@/app/components/Hero";
import Types from "@/app/components/Types";
import { defaultLocale, translations } from "@/lib/i18n";

export default async function AiPage({ params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];

  return (
    <div>
      <Hero translations={t} currentLocale={currentLocale}></Hero>
      <Advantages translations={t}></Advantages>
      <Types translations={t} currentLocale={currentLocale}></Types>
    </div>
  );
}
