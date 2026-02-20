import es from "../public/_gt/es.json";
import fr from "../public/_gt/fr.json";
import ja from "../public/_gt/ja.json";
import zh from "../public/_gt/zh.json";

const translations: Record<string, Record<string, unknown>> = {
  es,
  fr,
  ja,
  zh,
};

export default async function loadTranslations(locale: string) {
  return translations[locale];
}
