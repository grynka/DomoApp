import { View, Text } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";

const Diagnostic = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView className="p-4 space-y-4">
      <Text className="m-2 text-2xl font-bold">{t("Виникла проблема?")}</Text>
      {/* Плитка с вопросами по счетам и другим вопросам */}
      <View className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Text className="text-lg font-bold">{t("support.accounting")}</Text>
        <Text className="text-sm text-gray-700 mt-1">
          {t("support.accountingDesc")}
        </Text>
        <Text className="text-sm font-bold mt-2">0800 50 1011</Text>
      </View>

      {/* Плитка с технической поддержкой */}
      <View className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Text className="text-lg font-bold">{t("support.techSupport")}</Text>
        <Text className="text-sm text-gray-700 mt-1">
          {t("support.techSupportDesc")}
        </Text>
        <Text className="text-sm font-bold mt-2">0800 50 5322</Text>
      </View>
    </SafeAreaView>
  );
};

export default Diagnostic;
