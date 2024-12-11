import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthProvider";
import { useTheme } from "@/contexts/ThemeProvider";

// Определяем типы для услуг
interface UserServices {
  internet: string;
  tv: string;
  ip: string;
}

const Services = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { state } = useAuth();

  // Получение услуг из единственного адреса пользователя
  const services: UserServices = state.user?.services || {
    internet: "",
    tv: "",
    ip: "",
  };

  const serviceTiles = [
    { name: "internet", icon: "world" as const, value: services.internet },
    { name: "tv", icon: "tv" as const, value: services.tv },
    { name: "ip", icon: "cloud-up" as const, value: services.ip },
  ];

  return (
    <SafeAreaView className="px-4">
      <Text className="text-2xl text-center p-2 font-bold border-b w-full font-montserrat">
        {t("Services")}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 flex-row flex-wrap justify-between pt-2">
          {serviceTiles.map(
            (service, index) =>
              service.value && ( // Рендерим только доступные сервисы
                <View
                  key={index}
                  className={`w-full h-24 p-6 mb-6 flex flex-row items-center rounded-xl ${
                    theme === "light" ? "bg-white" : "bg-neutral-600"
                  }`}
                >
                  <Fontisto
                    name={service.icon}
                    size={36}
                    color={theme === "light" ? "black" : "white"} // Смена цвета иконки
                  />
                  <Text
                    className={`text-xl ml-4 font-montserrat ${
                      theme === "light"
                        ? "text-neutral-950"
                        : "text-neutral-100"
                    }`}
                  >
                    {`${t(service.name)}: ${service.value}`}
                  </Text>
                </View>
              ),
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;
