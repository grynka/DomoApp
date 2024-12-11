import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import FormField from "@/components/FormField";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

const Connection = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [build, setBuild] = useState("");

  return (
    <SafeAreaView className="h-full bg-gray-300">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View className="w-full justify-center min-h-[85vh] px-4 my-6 flex-1">
            <Text>Connection</Text>
            <FormField
              title="Country"
              value={user}
              handleChangeText={(e: string) => setUser(e)}
              otherStyles="mt-7"
              placeholder={undefined}
              editable={undefined}
            />
            <FormField
              title="Street"
              value={password}
              handleChangeText={(e: string) => setPassword(e)}
              otherStyles="mt-7"
              placeholder={undefined}
              editable={undefined}
            />
            <FormField
              title="Build"
              value={build}
              handleChangeText={(e: string) => setBuild(e)}
              otherStyles="mt-7 mb-7"
              placeholder={undefined}
              editable={undefined}
            />
            <CustomButton
              title={"Check"}
              handlePress={undefined}
              containerStyles="mt-5 rounded-xl min-h-[62] flex justify-center items-center bg-slate-500"
              textStyles="font-bold text-2xl text-center"
              isLoading={undefined}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Connection;
