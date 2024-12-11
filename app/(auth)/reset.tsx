import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Expo icons library

const KeyboardAvoidingComponent = () => {
  const router = useRouter();

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#D1D5DB" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="justify-start">
            <TouchableOpacity
              onPress={() => router.back()}
              className="items-center flex-row"
            >
              <AntDesign name="arrowleft" size={24} color="black" />
              <Text style={{ marginLeft: 8, fontSize: 18 }}>Back</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center", // Центрирование по вертикали
              alignItems: "center", // Центрирование по горизонтали
              padding: 16,
              backgroundColor: "#D1D5DB",
            }}
          >
            <Text style={{ fontSize: 24, marginBottom: 24 }}>
              Reset Password
            </Text>
            <FormField
              title="Login"
              value={""}
              handleChangeText={""}
              otherStyles="mt-24"
              placeholder={undefined}
              editable={undefined}
              isPhone={undefined}
            />
            <CustomButton
              title="Reset"
              containerStyles="w-full mt-24 rounded-xl min-h-[62] flex justify-center items-center bg-slate-500"
              textStyles="font-bold text-2xl text-center"
              handlePress={undefined}
              isLoading={undefined}
              disable={undefined}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingComponent;
