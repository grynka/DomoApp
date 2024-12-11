import React from "react";
import { Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import AuthTemplate from "@/components/auth/template";
import { Fontisto } from "@expo/vector-icons";

const Blocked = () => {
  const { t } = useTranslation();

  return (
    <AuthTemplate
      background={"#EED3D2"}
      logo={false}
      lang={false}
      header={
        <>
          <Text className="font-montserratSemiBold text-[20px] text-[#3B3B3B] mb-6">
            {t("Обліковий запис заблоковано ")}
          </Text>
          <Fontisto name="frowning" size={64} color="white" />
        </>
      }
      user={undefined}
      back={false}
    >
      <Text className="font-montserratBold text-[18px] text-start text-[#3B3B3B] px-4">
        {t("Причина блокування")}
      </Text>
      <Text className="text-start text-black mt-4 text-[16px] font-montserrat px-4">
        {t(
          "Згідно з умовами договору оферти за причини відсутності активності по балансу протягом 60 днів. Для відновлення потрібна участь наших співробітників. ",
        )}
      </Text>
      <View className="flex-1 justify-center px-4">
        <CustomButton
          title={t("Відновити послугу")}
          handlePress={() => router.push("/(auth)/restore")}
          containerStyles="mt-4 rounded-[12px] py-4 justify-center items-center bg-[#3EA335]"
          textStyles="font-montserratSemiBold text-[16px] text-center text-white"
          isLoading={undefined}
          disable={false}
        />
        <CustomButton
          title={t("Ні, пізніше")}
          handlePress={() => router.push("/(auth)/onbording")}
          containerStyles="mt-4 rounded-[12px] py-4 justify-center items-center"
          textStyles="font-montserratSemiBold text-[16px] text-center text-black"
          isLoading={undefined}
          disable={false}
        />
      </View>
    </AuthTemplate>
  );
};

export default Blocked;
