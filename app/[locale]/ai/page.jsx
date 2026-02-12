import Advantages from "@/app/components/Advantages";
import AuditForm from "@/app/components/AuditForm";
import Cases from "@/app/components/Cases";
import Clients from "@/app/components/Clients";
import Hero from "@/app/components/Hero";
import Numbers from "@/app/components/Numbers";
import Reviews from "@/app/components/Reviews";
import Speech from "@/app/components/Speech";
import Stages from "@/app/components/Stages";
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
      <AuditForm translations={t}></AuditForm>
      <Stages translations={t}></Stages>
      <Speech translations={t}></Speech>
      <Numbers translations={t}></Numbers>
      <Clients translations={t}></Clients>
      <AuditForm translations={t}></AuditForm>
      <Cases translations={t}></Cases>
      <Reviews translations={t}></Reviews>
      <AuditForm translations={t}></AuditForm>
    </div>
  );
}
