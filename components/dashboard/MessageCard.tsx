import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useTranslation } from "react-i18next";
import { FontAwesome6 } from "@expo/vector-icons";

interface Message {
  id: number;
  title: string;
  msg: string;
  type: "charge" | "tech" | "promo" | "discharge";
  date: Date;
  read: boolean;
  sum: number;
}

const MessageCard = ({ messages }: { messages: Message[] }) => {
  const { t } = useTranslation();

  const getDateLabel = (date: Date) => {
    const today = new Date();
    const msgDate = new Date(date);

    const formatTime = (date: Date) =>
      date.toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" });

    if (today.toDateString() === msgDate.toDateString()) {
      return `${t("Сьогодні")} ${formatTime(msgDate)}`;
    }

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (yesterday.toDateString() === msgDate.toDateString()) {
      return `${t("Вчора")} ${formatTime(msgDate)}`;
    }

    return `${msgDate.toLocaleDateString("uk-UA")} ${formatTime(msgDate)}`;
  };

  const getIcon = (type: "charge" | "tech" | "promo" | "discharge") => {
    switch (type) {
      case "charge":
        return (
          <View className="border rounded-[3px] border-[#3EA335] p-0 justify-center items-center">
            <Feather name="arrow-down-right" size={18} color="#3EA335" />
          </View>
        );
      case "promo":
        return <FontAwesome6 name="commenting" size={18} color="#0091CB" />;
      case "discharge":
        return (
          <View className="border rounded-[3px] border-[#303333] p-0 justify-center items-center">
            <Feather name="arrow-up-right" size={18} color="#303333" />
          </View>
        );
      default:
        return (
          <View className="border rounded-[3px] border-[#303333] p-0 justify-center items-center">
            <Feather name="arrow-down-right" size={18} color="#303333" />
          </View>
        );
    }
  };

  return (
    <View
      className="flex-col justify-center items-center py-2 px-4 mx-4 mb-4 rounded-[10px]"
      style={{ backgroundColor: "rgba(254, 254, 254, 0.5)" }}
    >
      <View className="flex-row justify-between items-center">
        <Text
          allowFontScaling={false}
          className="text-[16px] tracking-[0.14px] font-montserratMedium leading-5 self-start text-[#01020299] py-2 flex-1"
        >
          {t("Історія")}
        </Text>
        <TouchableOpacity className="flex-row bg-[#FFFFFF99] items-center p-2 rounded-[10px]">
          <Text className="text-[#0073A3] text-[12px] font-montserratSemiBold">
            {t("Усі")}
          </Text>
          <Entypo name="chevron-small-right" size={18} color="#0073A3" />
        </TouchableOpacity>
      </View>

      <View className="w-full">
        {messages.map((message) => (
          <View
            key={message.id}
            className={`flex-col items-center p-2 mb-4  ${
              message.type === "promo"
                ? "bg-[#CCE9F5] rounded-[10px]"
                : "border-b-[#D8D8D8] border-b"
            }`}
          >
            <View className="flex-row">
              <View className="mr-4 bg-white w-8 h-8 rounded-full p-[6px] justify-center items-center self-center">
                {getIcon(message.type)}
              </View>
              <View className="flex-1">
                <Text
                  className={`font-montserrat text-[16px] ${
                    message.type === "charge"
                      ? "text-[#3EA335]"
                      : message.type === "promo"
                        ? "text-[#0091CB] font-montserrat"
                        : "text-[#010202CC]"
                  }`}
                  allowFontScaling={false}
                >
                  {message.title}
                </Text>
                <Text
                  className="font-montserratMedium text-[12px] text-[#01020266] mt-1"
                  allowFontScaling={false}
                >
                  {getDateLabel(message.date)}
                </Text>
              </View>
              {message.type === "promo" && (
                <View className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-[#0091CB] items-center justify-center">
                  <Entypo name="chevron-right" size={14} color="#FFFFFF" />
                </View>
              )}
              {message.sum !== 0 && (
                <Text
                  className={`font-montserrat text-[16px] ${
                    message.type === "charge"
                      ? "text-[#3EA335]"
                      : "text-[#343535]"
                  }`}
                  allowFontScaling={false}
                >
                  {message.type === "discharge"
                    ? `-${message.sum}`
                    : `+${message.sum}`}
                  грн
                </Text>
              )}
            </View>
            {message.msg && (
              <Text className="flex-1 font-montserrat text-[14px] text-[#0091CB]">
                {message.msg}
              </Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default MessageCard;
