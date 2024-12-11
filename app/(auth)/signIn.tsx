import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  KeyboardAvoidingView,
  Alert,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  ActivityIndicator,
} from "react-native";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useAuth } from "@/contexts/AuthProvider";
import { useTranslation } from "react-i18next";
import AuthTemplate from "@/components/auth/template";

const SignIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();
  const { login } = useAuth();
  const animatedPadding = useRef(new Animated.Value(36)).current;
  const [wrong, setWrong] = useState("");

  useEffect(() => {
    const animatePadding = (toValue: number) => {
      Animated.timing(animatedPadding, {
        toValue,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };

    const showListener = Keyboard.addListener("keyboardDidShow", () => {
      animatePadding(4); // Перемещение вверх
    });

    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      animatePadding(16); // Возврат в исходное положение
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, [animatedPadding]);

  const submit = async () => {
    setIsSubmitting(true);

    try {
      const success = await login(user, password);

      if (success) {
        router.push("/");
      } else {
        setWrong(
          t(
            "Невірно введені дані, спробуйте ще раз або скиньте скористайтесь формою “Забули пароль” нижче",
          ),
        );
        console.log(wrong);
      }
    } catch (error) {
      Alert.alert(
        t("Login Error"),
        t("Something went wrong. Please try again."),
      );
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthTemplate
      logo={true}
      lang={true}
      header={undefined}
      page={"/(auth)/onbording"}
      back={true}
      background={undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 w-full"
        >
          <Text className="text-[20px] font-montserratSemiBold self-start text-[#3B3B3B] px-4">
            {t("login to")}
          </Text>
          {wrong ? (
            <Text className="text-[12px] font-montserratMedium text-[#AA231F] px-4 py-1 mt-2 mx-4 bg-[#EED3D2] rounded-[8px]">
              {wrong}
            </Text>
          ) : (
            <Text className="text-[16px] font-montserrat text-[#3B3B3B] px-4 pt-2">
              {t(
                "Авторизуйтесь за логіном та паролем,що Вам був виданий при підключенні.",
              )}
            </Text>
          )}
          <Animated.View
            className="px-4 justify-start flex-1"
            style={{ transform: [{ translateY: animatedPadding }] }}
          >
            <FormField
              title={t("login")}
              value={user}
              handleChangeText={setUser}
              placeholder={"Наприклад: domo12310"}
              otherStyles={undefined}
              editable={undefined}
              isPhone={undefined}
              hide={undefined}
            />
            <FormField
              title={t("password")}
              value={password}
              handleChangeText={setPassword}
              otherStyles="mt-4"
              hide={true}
              placeholder={undefined}
              editable={undefined}
              isPhone={undefined}
            />
            <CustomButton
              title={t("signIn")}
              handlePress={submit}
              containerStyles="mt-6 rounded-[12px] py-[14px] justify-center items-center bg-[#0091CB] w-full capitalize"
              textStyles="font-montserratSemiBold text-[16px] text-center text-white"
              isLoading={isSubmitting}
              disable={!(user && password)}
            />
            {isSubmitting && (
              <ActivityIndicator
                size="large"
                color="#0091CB"
                style={{ marginTop: 20 }}
              />
            )}
            <CustomButton
              title={t("Forgot password?")}
              handlePress={submit}
              containerStyles="mt-6 rounded-[12px] py-[14px] justify-center items-center w-full capitalize"
              textStyles="text-[14px] font-montserratSemiBold text-center text-[#3B3B3B]"
              isLoading={isSubmitting}
              disable={false}
            />
          </Animated.View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </AuthTemplate>
  );
};

export default SignIn;
