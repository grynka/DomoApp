import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "@/contexts/AuthProvider";
import { useTheme } from "@/contexts/ThemeProvider";
import { useTranslation } from "react-i18next";
import CountryFlag from "react-native-country-flag";

interface LangTogleProps {
  otherStyles?: string; // Указываем тип как строку для tailwind классов
}

const LangTogle: React.FC<LangTogleProps> = ({ otherStyles = "" }) => {
  const { state, updateUser } = useAuth();
  const { user } = state;
  const { i18n, t } = useTranslation();
  const { theme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    user?.language || i18n.language,
  );

  const flags = [
    { lang: "pl", name: "Poland", code: "pl" },
    { lang: "en", name: "English", code: "gb" },
    { lang: "uk", name: "Ukrainian", code: "ua" },
  ];

  const changeLanguage = (lang: string) => {
    // Указываем тип для lang
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    updateUser({ language: lang });
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text
        className={`mb-4 capitalize text-xl ${theme === "light" ? "text-black" : "text-white"}`}
      >
        {t("select language")}
      </Text>
      <View className="flex-row mb-4 capitalize justify-evenly">
        {flags.map(({ lang, name, code }) => (
          <TouchableOpacity
            key={name}
            onPress={() => changeLanguage(lang)} // lang уже с типом string
            style={{ padding: 10 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: selectedLanguage === lang ? 3 : 0,
                borderBottomColor:
                  selectedLanguage === lang ? "green" : "transparent",
                paddingBottom: 3,
              }}
            >
              <CountryFlag
                isoCode={code}
                size={24}
                style={{ marginRight: 5, borderWidth: 1 }}
              />
              <Text
                className={`${theme === "light" ? "text-black" : "text-white"}`}
              >
                {t(name)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default LangTogle;
