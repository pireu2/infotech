import translationsData from "../data/translations.json";
import { useLanguage } from "../contexts/LanguageContext";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translationsData[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return { t, translations: translationsData[language] };
};
