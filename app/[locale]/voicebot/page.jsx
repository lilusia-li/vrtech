import { defaultLocale, translations } from "@/lib/i18n";

export default async function VoiceBotPage({ params }) {
  const { locale } = await params;
  const currentLocale = locale || defaultLocale;
  const t = translations[currentLocale] || translations[defaultLocale];

  return <div>voicebot</div>;
}
