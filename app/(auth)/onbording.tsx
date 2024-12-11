import React from "react";
import { Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import AuthTemplate from "@/components/auth/template";

const Onbording = () => {
  const { t } = useTranslation();

  return (
    <AuthTemplate
      logo={true}
      lang={true}
      header={false}
      user={undefined}
      back={undefined}
      background={undefined}
    >
      <Text className="font-montserratBold text-[30px] text-start text-[#3B3B3B] px-4">
        {t("Welcome! to ")}
      </Text>
      <Text className="font-montserratBold text-[30px] text-start text-[#3B3B3B] px-4">
        {`“${t("My Domonet")}”`}
      </Text>
      <Text className="text-start text-black mt-6 text-[16px] font-montserrat px-4">
        {t("Personal cabinet for control and pay to my ISP")}
      </Text>
      <View className="flex-1 justify-center px-4">
        <Text className="text-[#3B3B3B] font-montserratSemiBold text-[18px]">
          {t("Ви вже наш абонент?")}
        </Text>
        <CustomButton
          title={t("Так, увійти")}
          handlePress={() => router.push("/(auth)/signIn")}
          containerStyles="mt-4 rounded-[12px] py-4 justify-center items-center bg-[#0091CB]"
          textStyles="font-montserratSemiBold text-[16px] text-center text-white"
          isLoading={undefined}
          disable={false}
        />
        <CustomButton
          title={t("Ні, хочу підключитися")}
          handlePress={() => router.push("/(auth)/connection")}
          containerStyles="mt-4 rounded-[12px] py-4 justify-center items-center border"
          textStyles="font-montserratSemiBold text-[16px] text-center text-black"
          isLoading={undefined}
          disable={false}
        />
      </View>
    </AuthTemplate>
  );
};

export default Onbording;
