import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesome6 } from "@expo/vector-icons";
import { useAuth } from "@/contexts/AuthProvider";

const CreditCard = () => {
  const { t } = useTranslation();
  const { updateUser } = useAuth();

  return (
    <View className="flex-col justify-center items-center py-2 px-4 mx-4 mb-4 rounded-[10px] bg-[#F0E3FFCC]">
      <View className="flex-row justify-between items-center">
        <Text className="self-start py-2 text-[#BA55D3] font-montserratMedium text-[18px] flex-1">
          {t("“Кредит довіри”")}
        </Text>
        <Text className="self-start py-2 text-[#949494] font-montserratSemiBold text-[12px]">
          {t("1 раз на місяць")}
        </Text>
      </View>
      <Text className="self-start font-montserratMedium text-[#BA55D3]">
        {t(
          "Це віртуальна сума, щоб покрити мінус. Активуйте зараз та користуйтесь послугою - а платіть протягом 7 днів",
        )}
      </Text>
      <TouchableOpacity
        onPress={() => updateUser({ credit: true })}
        className="bg-[#FFFFFF99] rounded-[10px] p-2.5 flex-row items-center justify-center mt-4 mb-2 w-full border-[#A769F8]"
      >
        <FontAwesome6 name="coins" size={24} color="#931BBE" />
        <Text
          allowFontScaling={false}
          className="text-[14px] font-montserratBold self-center leading-7 pl-2 traking-[0.28px] text-[#931BBE]"
        >
          {t("Активувати кредит на 7 днів")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreditCard;
