import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { Fontisto } from "@expo/vector-icons";
import LogoSvg from "@/assets/images/domonet";
import CityLineSvg from "@/assets/images/cityline";
import Back from "../BackButton";

const languages = ["uk", "en", "pl"];

interface AuthTemplateProps {
  logo?: boolean; // logo is optional, and boolean type indicates whether to show the logo
  lang?: boolean; // lang is optional, and boolean type indicates whether to show the language selector
  children: React.ReactNode; // children prop to allow nested components
  header?: React.ReactNode; // optional header component
  page?: string; // optional page identifier for navigation
  back?: boolean; // optional back button visibility
  background?: string; // optional background color
}

const AuthTemplate = ({
  logo,
  lang,
  children,
  header,
  page,
  back,
  background,
}: AuthTemplateProps) => {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <ImageBackground source={require("@/assets/images/BG.png")}>
      <SafeAreaView
        edges={["right", "top", "left"]}
        className="flex h-full items-center justify-center"
        style={{ backgroundColor: background }}
      >
        {back && <Back page={page} />}
        <View className="relative justify-center items-center mx-4 w-full h-[232px]">
          {logo && (
            <>
              <LogoSvg fill={"#3B3B3B"} width={177} height={139} />
              <Text className="font-montserratBold text-[14px] uppercase text-[#3B3B3B]">
                {t("Provider of Advantages")}
              </Text>
            </>
          )}
          {header && header}
          {lang && (
            <View className="absolute flex-col justify-center items-end self-end gap-y-2">
              <View className="bg-white rounded-[4px] justify-center items-center w-9 pt-3 mr-4">
                <Fontisto name="world-o" size={24} color="#18A0D6" />
                <Text className="text-[#0091CB] font-montserratMedium text-[14px] uppercase py-3">
                  {selectedLanguage}
                </Text>
              </View>
              {languages
                .filter((lang) => lang !== selectedLanguage)
                .map((lang) => (
                  <TouchableOpacity
                    key={lang}
                    onPress={() => handleLanguageChange(lang)}
                    className="w-9 h-9 border-white border rounded-[4px] justify-center items-center self-center mr-4"
                  >
                    <Text className="text-white font-montserratMedium text-[14px] uppercase">
                      {lang}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
          )}
        </View>

        <View
          className="flex-1 relative w-full rounded-t-[24px] pt-6"
          style={{ backgroundColor: "rgba(254, 254, 254, 0.8)" }}
        >
          {children}
          <CityLineSvg
            height={Dimensions.get("window").width / 3}
            width={Dimensions.get("window").width}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AuthTemplate;
