// src/components/dashboard/LoyaltyInfo.tsx
import React from "react";
import { Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useTranslation } from "react-i18next";
import BonusesScreen from "@/components/promoution/diagram";

interface Cashback {
  percent: number;
  friends: number;
  loyality: number;
  other: number;
}

interface LoyaltyInfoProps {
  dateActivation: number;
  days: number;
  cashback: Cashback;
}

const LoyaltyInfo: React.FC<LoyaltyInfoProps> = ({
  dateActivation,
  days,
  cashback,
}) => {
  const { t } = useTranslation();
  const { percent, friends, loyality, other } = cashback;
  return (
    <View
      className="flex-col justify-center items-center pt-2 pb-4 px-4 mx-4 mb-4 rounded-[10px]"
      style={{ backgroundColor: "rgba(254, 254, 254, 0.5)" }}
    >
      {/* Заголовок */}
      <View className="flex-row justify-between items-center w-full flex-1">
        <Text className="text-[16px] tracking-[0.14px] font-montserratMedium text-[#01020299]">
          {t("loyality")}
        </Text>
        <Text className="font-montserratMedium text-[#CECECE] text-[12px]">
          {`${t("оновлено")} ${new Date(dateActivation)
            .toLocaleDateString("uk-UA")
            .replace(/\./g, "/")}`}
        </Text>
      </View>

      {/* Основная информация */}
      <View className="flex-row justify-between w-full pb-4 pt-3 items-center ">
        <Text className="text-[#0091CB] font-montserratMedium text-[14px]">
          {t(`Ви з ДОМОНЕТ вже ${days} дні`)}
        </Text>
        <Text className="text-[#0091CB] font-montserratMedium text-[14px]">
          {t("з ")}
          {new Date(dateActivation)
            .toLocaleDateString("uk-UA")
            .replace(/\./g, "/")}
        </Text>
      </View>

      <View className="flex-row gap-x-4 w-full">
        {/* Карточка: Стаж */}

        <View className="w-5/12 self-start bg-[#FFFFFFCC] rounded-[8px] p-2">
          <View className="flex-row items-center">
            <FontAwesome6 name="calendar-check" size={18} color="#0091CB99" />
            <Text className="font-montserratMedium text-[14px] ml-2 text-[#0091CB]">
              {t("Стаж \nлояльності")}
            </Text>
          </View>
          <Text className="font-montserratMedium text-[14px] text-[#0091CB] mt-2">
            {(days / 30).toFixed()}
            {t(" місяців")}
          </Text>
          <Text className="font-montserratMedium text-[14px] text-[#0091CB]">
            {percent}
            {t("% кешбек")}
          </Text>
        </View>

        {/* Карточка: Кешбек */}
        <View className="flex-1 self-start bg-[#CCE9F5] rounded-[8px] p-2 h-full">
          <View className="flex-row items-center flex-1">
            <View className="flex-col items-start justify-stretch flex-1">
              <View className="flex-1">
                <Text className="font-montserratMedium text-[14px] text-[#0091CB]">
                  {t("Бонуси за весь час")}
                </Text>
              </View>
              <Text className="font-montserratMedium text-[18px] text-[#0091CB]">
                {loyality + friends + other}
                {t(" грн")}
              </Text>
            </View>
            <View className="justify-center items-center">
              <BonusesScreen
                bonuses={[
                  { key: t("Лояльність"), value: loyality, color: "#F2A76B" },
                  { key: t("Приводь друга"), value: friends, color: "#8BC886" },
                  { key: t("Інші акції"), value: other, color: "#66BDE0" },
                ]}
                legend={false}
                size={35}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoyaltyInfo;
