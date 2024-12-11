import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MaskInput from "react-native-mask-input";
import Ionicons from "@expo/vector-icons/Ionicons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  editable,
  isPhone,
  hide,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`gap-y-2 ${otherStyles}`}>
      <Text className="text-[14px] capitalize font-montserratMedium">
        {title}
      </Text>
      <View className="border-[#99D3EA] w-full h-11 px-4 bg-white rounded-[8px] items-center flex-row">
        {isPhone ? (
          <MaskInput
            className="flex-1 text-[#3B3B3B] h-full justify-center items-center font-montserrat text-[24px]"
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            editable={editable}
            mask={[
              "(",
              /\d/,
              /\d/,
              /\d/,
              ") ",
              /\d/,
              /\d/,
              /\d/,
              " ",
              /\d/,
              /\d/,
              " ",
              /\d/,
              /\d/,
            ]}
            keyboardType="phone-pad"
            maxLength={15}
            textAlignVertical="center"
            {...props}
          />
        ) : (
          <TextInput
            className="flex-1 text-[#3B3B3B] h-full justify-center items-center font-montserrat text-[14px]"
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            editable={editable}
            textAlignVertical="center"
            secureTextEntry={hide && !showPassword}
            {...props}
          />
        )}
        {hide && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <Ionicons name="eye-outline" size={24} color="#99D3EA" />
            ) : (
              <Ionicons name="eye-off-outline" size={24} color="#99D3EA" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
