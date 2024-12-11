import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "@/contexts/AuthProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeProvider";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import PromoCarousel from "@/components/dashboard/PromoCarousel";
import BalanceCard from "@/components/dashboard/BalanceCard";
import LoyaltyInfo from "@/components/dashboard/LoyaltyInfo";
import CreditCard from "@/components/dashboard/CreditCard";
import MessageCard from "@/components/dashboard/MessageCard";
import { SafeAreaView } from "react-native-safe-area-context";

type AddressStatus = "active" | "disable" | "credit" | "freeze";

type MessageType = "charge" | "promo" | "discharge" | "tech";

interface Message {
  id: number;
  title: string;
  msg: string;
  type: MessageType;
  sum: number;
  date: Date;
  read: boolean;
}

export default function Home() {
  const { state } = useAuth();
  const { user, loading } = state;
  const { t } = useTranslation();
  const { theme } = useTheme();

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (!user) {
    return () => router.push("../index");
  }

  const {
    username,
    adress,
    status,
    balance,
    dissableDate,
    dateActivation,
    credit,
    cashback,
  } = user;
  const now = Date.now();
  const differenceInMs = now - dateActivation;
  const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  const statusStyles: Record<
    AddressStatus,
    { backgroundColor: string; message: string }
  > = {
    active: { backgroundColor: "#65B55D", message: t("All Done") },
    disable: {
      backgroundColor: "#BB4F4C",
      message: t("Account blocked, charge balance"),
    },
    credit: {
      backgroundColor: "#ED893A",
      message: t("Credit active"),
    },
    freeze: {
      backgroundColor: "#33A7D5",
      message: t("Account Freez, to activate go support"),
    },
  };

  const currentStatus =
    statusStyles[status as AddressStatus] || statusStyles.active;

  const promotions = [
    {
      id: "1",
      title: "Залишайте відгуки",
      text: "Отримайте 350 грн бонусів",
      image: "https://i.ibb.co/DzByP5f/reviews.png",
      backgroundColor: "#D8EDD7", // Цвет фона
      textColor: "#2D7A27", // Цвет текста
    },
    {
      id: "2",
      title: "Подключение IPTV бесплатно",
      text: "Подключение IPTV бесплатно",
      image: "https://i.ibb.co/DzByP5f/reviews.png",
      backgroundColor: "#FBE2CE", // Цвет фона
      textColor: "#E96C09", // Цвет текста
    },
    {
      id: "3",
      title: "Акция на оборудование",
      text: "Акция на оборудование",
      image: "https://i.ibb.co/DzByP5f/reviews.png",
      backgroundColor: "#D8EDD7", // Цвет фона
      textColor: "#2D7A27", // Цвет текста
    },
    {
      id: "4",
      title: "Скорость в 2 раза выше!",
      text: "Скорость в 2 раза выше!",
      image: "https://i.ibb.co/DzByP5f/reviews.png",
      backgroundColor: "#D8EDD7", // Цвет фона
      textColor: "#2D7A27", // Цвет текста
    },
  ];

  const messages: Message[] = [
    {
      id: 1190458,
      title: "Поповнення балансу",
      msg: "",
      type: "charge",
      sum: 200,
      date: new Date(2024, 8, 20, 9, 0),
      read: false,
    },
    {
      id: 1180104,
      title: "Спец пропозиція для Вас",
      msg: "Дякуємо, що Ви з нами! Напишіть чесний відгук про Інтернет від ДОМОНЕТ та отримайте 150 грн бонусу на рахунок...",
      type: "promo",
      sum: 0,
      date: new Date(2024, 11, 6, 12, 0),
      read: true,
    },
    {
      id: 1180105,
      title: "Нарахування абонплати",
      msg: "",
      type: "discharge",
      sum: 200,
      date: new Date(2024, 11, 7, 10, 0),
      read: false,
    },
  ];

  return (
    <ImageBackground source={require("@/assets/images/BG.png")}>
      <SafeAreaView
        edges={["right", "top", "left"]}
        className="flex h-full items-center justify-center"
      >
        <View className="flex-row items-center px-4 pt-4 pb-2">
          <TouchableOpacity onPress={() => router.push("../(auth)/profile")}>
            <Ionicons
              name="person-circle-outline"
              size={48}
              color={theme === "light" ? "black" : "white"}
            />
          </TouchableOpacity>

          {/* Вторая колонка с текстом (ID и адрес) */}
          <View className={`flex-1 flex-col justify-between px-4`}>
            <Text
              allowFontScaling={false}
              className={`text-18px font-montserratMedium leading-5 ${theme === "light" ? "text-neutral-950" : "text-neutral-300"}`}
            >
              {"ID: "}
              {username}
            </Text>
            <Text
              allowFontScaling={false}
              numberOfLines={1} // Ограничение текста до одной строки
              ellipsizeMode="tail"
              className={`text-[14px] font-montserratMedium traking-[0.12px] leading-4 ${theme === "light" ? "text-neutral-950" : "text-neutral-300"}`}
            >
              {adress}
            </Text>
          </View>

          {/* Третья колонка с иконкой уведомлений */}
          <TouchableOpacity
            onPress={() => router.push("../(auth)/notification")}
          >
            <SimpleLineIcons
              name="bell"
              size={24}
              color={theme === "light" ? "black" : "white"}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ backgroundColor: currentStatus.backgroundColor }}
          className="h-8 justify-center w-full items-center"
        >
          <Text className="text-white text-[14px] font-montserratMedium traking-[0.12px] leading-4">
            {currentStatus.message}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <BalanceCard
            balance={balance}
            dissableDate={dissableDate}
            credit={credit}
          />
          {balance < 0 && !credit && <CreditCard />}
          <LoyaltyInfo
            dateActivation={dateActivation}
            days={days}
            cashback={cashback}
          />
          <PromoCarousel promotions={promotions} />
          <MessageCard messages={messages} />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
