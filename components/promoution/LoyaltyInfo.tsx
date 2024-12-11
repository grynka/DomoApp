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
  const { percent, friends, loyality, other } = cashback;
  const { t } = useTranslation();

  return (
    <View
      className="flex-col justify-center items-center pt-2 pb-4 px-4 mx-4 mb-4 rounded-[10px]"
      style={{ backgroundColor: "rgba(254, 254, 254, 0.5)" }}
    >
      {/* Заголовок */}
      <View className="flex-row justify-between items-center w-full mb-4">
        <Text className="text-[16px] tracking-[0.14px] font-montserratMedium leading-5 text-[#01020299] flex-1">
          {t("loyality")}
        </Text>
        <Text className="font-montserratMedium text-[#CECECE] text-[12px]">
          {`${t("оновлено")} ${new Date(dateActivation)
            .toLocaleDateString("uk-UA")
            .replace(/\./g, "/")}`}
        </Text>
      </View>

      {/* Основная информация */}
      <View className="flex-row justify-between w-full">
        <View className="w-1/2 self-start">
          <View className="flex-row items-center">
            <FontAwesome6 name="calendar-check" size={18} color="#0091CB99" />
            <Text className="text-[#0091CB] font-montserratMedium text-[12px] ml-1">
              {new Date(dateActivation)
                .toLocaleDateString("uk-UA")
                .replace(/\./g, "/")}
            </Text>
          </View>
        </View>
        <View className="w-1/2 self-start">
          <View className="flex-row justify-end items-center">
            <Text className="text-[#0091CB] font-montserratMedium text-[12px]">
              {t(`Ви з ДОМОНЕТ вже ${days} дні`)}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row space-x-4 w-full py-4">
        {/* Карточка: Стаж */}
        <View className="flex-1 self-start bg-[#CCE9F5] rounded-[8px] p-2">
          <View className="flex-row items-center">
            <FontAwesome6 name="calendar-check" size={18} color="#0091CB99" />
            <Text className="font-montserratMedium text-[14px] ml-2 text-[#0091CB]">
              {t("Стаж")}
            </Text>
          </View>
          <Text className="font-montserratMedium text-[18px] text-[#0091CB] mt-2">
            {days}
          </Text>
          <Text className="font-montserrat text-[14px] text-[#0091CB] mb-2">
            {t("Днів")}
          </Text>
        </View>

        {/* Карточка: Кешбек */}
        <View className="flex-1 self-start bg-[#CCE9F5] rounded-[8px] p-2">
          <View className="flex-row items-center">
            <FontAwesome6 name="gift" size={18} color="#0091CB99" />
            <Text className="font-montserratMedium text-[14px] ml-2 text-[#0091CB]">
              {t("Кешбек")}
            </Text>
          </View>
          <Text className="font-montserratMedium text-[18px] text-[#0091CB] mt-2">
            {percent}
            {" %"}
          </Text>
          <Text className="font-montserrat text-[14px] text-[#0091CB] mb-2">
            {t("щомісячно")}
          </Text>
        </View>
      </View>

      {/* Диаграмма */}
      <BonusesScreen
        bonuses={[
          { key: t("Лояльність"), value: loyality, color: "#F2A76B" },
          { key: t("Приводь друга"), value: friends, color: "#8BC886" },
          { key: t("Інші акції"), value: other, color: "#66BDE0" },
        ]}
        legend={true}
        size={49}
      />
    </View>
  );
};

export default LoyaltyInfo;
