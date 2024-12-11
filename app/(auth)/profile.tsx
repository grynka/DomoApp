import React, { useState } from "react";
import { Text, Alert, View } from "react-native";
import { useAuth } from "@/contexts/AuthProvider";
import { useTheme } from "@/contexts/ThemeProvider";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import Back from "@/components/BackButton";
import { useRouter } from "expo-router";

const Profile = () => {
  const { state, logout, updateUser } = useAuth();
  const { user } = state;
  const { i18n, t } = useTranslation();
  const { theme } = useTheme();
  const [username, setUsername] = useState(user?.username || "");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(user?.phone || "");
  const [email, setEmail] = useState(user?.email || "");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage] = useState(user?.language || i18n.language);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await updateUser({ phone, email, password, language: selectedLanguage });
      Alert.alert("Success", "Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };
  const router = useRouter();

  const handleLogout = async () => {
    await logout(); // Выполнение логина
    router.push("/"); // Навигация на экран входа
  };

  return (
    <SafeAreaView
      className="h-full flex-1 w-full p-6"
      style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
    >
      <Back page={undefined} />
      <View className="flex-row items-center w-full mb-4">
        <Text
          className="flex-grow text-center capitalize text-2xl font-montserrat text-black" // Flex-grow позволяет заголовку занимать больше места
          numberOfLines={1} // Ограничиваем текст в одну строку
          ellipsizeMode="tail" // Добавляем многоточие при необходимости
          style={{ color: theme === "light" ? "black" : "white" }}
        >
          {t("profile")}
        </Text>
        <View className="w-10" />
      </View>
      <FormField
        title={t("name")}
        value={username}
        handleChangeText={isEditing ? setUsername : null}
        placeholder="Enter your name"
        otherStyles="mb-4 capitalize"
        editable={false}
        isPhone={undefined}
        hide={undefined}
      />
      <FormField
        title={t("password")}
        value={password}
        handleChangeText={isEditing ? setPassword : null}
        placeholder={t("Enter new password")}
        otherStyles="mb-4"
        editable={isEditing}
        secureTextEntry
        isPhone={undefined}
        hide={undefined}
      />
      <FormField
        title={t("phone")}
        value={phone}
        handleChangeText={isEditing ? setPhone : null}
        placeholder="Enter phone number"
        otherStyles="mb-4"
        editable={isEditing}
        isPhone={true}
        hide={undefined}
      />
      <FormField
        title="Email"
        value={email}
        handleChangeText={isEditing ? setEmail : null}
        placeholder="Enter your email"
        otherStyles="mb-4 capitalize"
        editable={isEditing}
        isPhone={undefined}
        hide={undefined}
      />

      <CustomButton
        title={isEditing ? "Save Changes" : t("edit profile")}
        handlePress={isEditing ? handleSave : () => setIsEditing(true)}
        containerStyles="w-full mt-12 rounded-xl min-h-[62] flex justify-center items-center bg-slate-500"
        textStyles="font-bold text-2xl text-center capitalize"
        isLoading={isLoading}
        disable={true}
      />
      <CustomButton
        title={t("log out")}
        handlePress={handleLogout}
        containerStyles="w-full mt-4 rounded-xl min-h-[62] flex justify-center items-center bg-red-500"
        textStyles="font-bold text-2xl text-center capitalize"
        isLoading={isLoading}
        disable={undefined}
      />
    </SafeAreaView>
  );
};

export default Profile;
