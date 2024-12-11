import React, { useEffect, ReactNode } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import { useAuth } from "@/contexts/AuthProvider";
import translationEn from "@/locales/en-UK/translation.json";
import translationUk from "@/locales/uk-UA/translation.json";
import translationPl from "@/locales/pl-PL/translation.json";

// Импорт полифилла для Intl.PluralRules
import "intl-pluralrules";

const resources = {
  uk: { translation: translationUk },
  en: { translation: translationEn },
  pl: { translation: translationPl },
};

// Инициализация i18n
const initI18n = () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: getLocales()[0].languageCode || "uk",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

interface I18nProviderProps {
  children: ReactNode;
}

const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const { state } = useAuth();
  const { user } = state;

  useEffect(() => {
    initI18n();
  }, []); // Инициализация только один раз

  useEffect(() => {
    if (user?.language) {
      i18n.changeLanguage(user.language);
    } else {
      i18n.changeLanguage(
        getLocales()[0].languageCode === "ru"
          ? "uk"
          : getLocales()[0].languageCode || "uk",
      );
    }
  }, [user]);

  return <>{children}</>;
};

export default I18nProvider;
