import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { Octicons } from "@expo/vector-icons";

interface BalanceCardProps {
  balance: number;
  dissableDate: number;
  credit: boolean;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  dissableDate,
  credit,
}) => {
  const { t } = useTranslation();

  return (
    <View
      className="flex-col justify-center items-center py-2 px-4 m-4 rounded-[10px]"
      style={{ backgroundColor: "rgba(254, 254, 254, 0.5)" }}
    >
      <Text
        allowFontScaling={false}
        className="text-[16px] traking-[0.14px] font-montserratMedium leading-5 self-start text-[#01020299]"
      >
        {t("balance")}
      </Text>
      {credit && (
        <View className="m-4 p-2 bg-[#DDDDFA] rounded-[8px]  w-full">
          <View className="flex-row justify-between">
            <Text
              allowFontScaling={false}
              className="text-[12px] traking-[0.14px] font-montserratMedium leading-5 self-start text-[#A86AF8]"
            >
              {t("Активований “Кредит довіри”")}
            </Text>
            <View className="w-6 h-6 bg-white rounded-[12px] p-1">
              <Octicons
                name="rocket"
                size={16}
                color="#BA55D3"
                style={{
                  transform: [{ rotate: "-45deg" }],
                }}
              />
            </View>
          </View>
          <View className="flex-row justify-start items-center flex-1">
            <Ionicons name="alarm-outline" size={24} color="#A86AF8" />
            <Text
              allowFontScaling={false}
              className="text-[18px] traking-[0.15px] font-montserratSemiBold leading-5 self-start text-[#A86AF8] my-2 ml-1"
            >
              {t("до 11:04:56 10/11/2024")}
            </Text>
          </View>
          <Text
            allowFontScaling={false}
            className="text-[12px] traking-[0.14px] font-montserratMedium leading-5 self-start text-[#A86AF8]"
          >
            {t(
              "Це віртуальна сума, після закінчення терміну кредиту Інтернет буде обмежено.",
            )}
          </Text>
        </View>
      )}
      <View className="flex-row items-center mb-4 justify-between self-stretch">
        <Text
          allowFontScaling={false}
          className={`text-[24px] font-montserratSemiBold items-end ${
            balance >= 0 ? "text-black" : "text-[#AA231F]"
          }`}
        >
          <Entypo name="info-with-circle" size={18} color="black" /> {balance}
          .00{" "}
          <Text
            allowFontScaling={false}
            className="text-[18px] font-montserratMedium"
          >
            грн
          </Text>
        </Text>
        <TouchableOpacity className="bg-[#E96C09] rounded-[10px] p-2.5 flex-row items-center justify-center">
          <Ionicons name="card" size={24} color="white" />
          <Text
            allowFontScaling={false}
            className="text-[14px] font-montserratBold  self-center leading-7 pl-2 capitalize traking-[0.28px] text-white"
          >
            {t("charge")}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between items-center">
        <Text className="flex-1 font-montserratMedium">
          {t("Наступна дата відключення")}
        </Text>
        <Text className="font-montserratMedium">
          {new Date(dissableDate)
            .toLocaleDateString("uk-UA")
            .replace(/\./g, "/")}
        </Text>
      </View>
    </View>
  );
};

export default BalanceCard;
