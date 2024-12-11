import React from "react";
import { View, Text, FlatList } from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import Back from "@/components/BackButton";
import { useTheme } from "@/contexts/ThemeProvider";

interface Notification {
  msg: string;
  type: "finance" | "tech";
  date: Date;
  read: boolean;
}

const notifications: Record<string, Notification> = {
  notification_1190458: {
    msg: "Шановний абонент. Для відновлення послуги, поповніть баланс на 2321.8 грн.  Ваш рахунок 546454.",
    type: "finance",
    date: new Date(2024, 8, 20, 9, 0),
    read: false,
  },
  notification_1180104: {
    msg: "Шановний абонент. Для відновлення послуги, поповніть баланс на 2321.8 грн.  Ваш рахунок 546454.",
    type: "finance",
    date: new Date(2024, 8, 5, 12, 0),
    read: true,
  },
  notification_1180105: {
    msg: "Шановний абонент. Для відновлення послуги, поповніть баланс на 2321.8 грн.  Ваш рахунок 546454.",
    type: "tech",
    date: new Date(2024, 8, 5, 10, 0),
    read: false,
  },
};

interface NotificationItemProps {
  id: string;
  notification: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  id,
  notification,
}) => {
  const { msg, type, date, read } = notification;
  const formattedDate = date.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const notificationNumber = id.replace("notification_", ""); // Удаляем префикс

  return (
    <View className="p-2 mb-2">
      {/* Номер сообщения и дата в одном ряду */}
      <View className="flex-row justify-between items-center mb-1">
        <Text className="font-montserrat">{notificationNumber}</Text>
        <Text className="font-montserrat">{formattedDate}</Text>
      </View>
      {/* Иконка и текст сообщения */}
      <View className="flex-row items-center">
        <View className="mr-2 relative bg-gray-300 rounded-full w-10 h-10 items-center justify-center">
          {type === "finance" ? (
            <AntDesign name="creditcard" size={24} color="black" />
          ) : (
            <Octicons name="tools" size={24} color="black" />
          )}
          {!read && (
            <View className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full " />
          )}
        </View>
        <Text className="text-[16px] flex-shrink text-left font-montserrat">
          {msg}
        </Text>
      </View>
    </View>
  );
};

const Finance: React.FC = () => {
  const notificationsArray = Object.entries(notifications);
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <SafeAreaView className="p-4">
      <View className="flex-row items-center w-full mb-4">
        <Back user={false} />
        <Text
          className="flex-grow text-center capitalize text-2xl font-montserrat text-black" // Flex-grow позволяет заголовку занимать больше места
          numberOfLines={1} // Ограничиваем текст в одну строку
          ellipsizeMode="tail" // Добавляем многоточие при необходимости
          style={{ color: theme === "light" ? "black" : "white" }}
        >
          {t("History notification")}
        </Text>
        <View className="w-10" />
      </View>
      <FlatList
        data={notificationsArray}
        keyExtractor={([id]) => id}
        renderItem={({ item: [id, notification] }) => (
          <NotificationItem id={id} notification={notification} />
        )}
      />
    </SafeAreaView>
  );
};

export default Finance;
