import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import AuthTemplate from "@/components/auth/template";
import { Fontisto } from "@expo/vector-icons";
import { useAuth } from "@/contexts/AuthProvider";
import FormField from "@/components/FormField";

const Blocked = () => {
  const { t } = useTranslation();
  const { state } = useAuth();
  const { user } = state;
  const [phone, setPhone] = useState(user?.phone || "");
  const [request, setRequest] = useState(false);

  const handlePhoneChange = (masked: any, unmasked: string) => {
    setPhone(unmasked.replace(/\D/g, ""));
  };

  const submitRequest = () => {
    setRequest(true);
  };

  return (
    <AuthTemplate
      background={"#D8EDD7"}
      logo={false}
      lang={false}
      header={
        <>
          <Text className="font-montserratSemiBold text-[20px] text-[#3B3B3B] mb-6">
            {t("Відновлення облікового запису")}
          </Text>
          <Fontisto name="checkbox-active" size={64} color="white" />
        </>
      }
      user={user}
      back={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 w-full"
        >
          <Text
            className={`font-montserratBold text-[18px] text-start ${request ? "text-[#30AF15]" : "text-[#3B3B3B]"}  px-4`}
          >
            {request ? t("Успішно") : t("Запит на зворотний зв’язок")}
          </Text>
          <View className="flex-1 justify-start px-4 mt-9">
            {request ? (
              <Text className="font-montserrat text-[14px]">
                {t("Очікуйте зворотного звязку нашого менеджера")}
              </Text>
            ) : (
              <FormField
                title={t("Актуальний номер телефону")}
                value={phone}
                placeholder="(099) 000 00 00"
                handleChangeText={handlePhoneChange}
                isPhone={true}
                otherStyles={undefined}
                editable={undefined}
              />
            )}
            <Text className="font-montserrat text-[14px] text-center mb-6 mt-20">
              Графік роботи Абонентського відділу: 9:00 21:00, без вихідних
            </Text>
            <CustomButton
              title={
                request
                  ? t("Повернутись на головну сторінку")
                  : t("Підтвердити")
              }
              handlePress={
                request ? () => router.push("/(auth)/onbording") : submitRequest
              }
              containerStyles={`mt-4 rounded-[12px] py-4 justify-center items-center ${request ? "border-[#3EA335] border" : "bg-[#3EA335]"}`}
              textStyles={`font-montserratSemiBold text-[16px] text-center ${request ? "text-[#30AF15]" : "text-white"} `}
              isLoading={undefined}
              disable={phone.length < 10}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </AuthTemplate>
  );
};

export default Blocked;
