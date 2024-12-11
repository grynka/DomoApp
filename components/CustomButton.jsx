import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  disable,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${containerStyles} ${isLoading || disable ? "bg-[#F5F5F5] text-[#D4D4D4]" : ""}`}
      disabled={isLoading || disable}
    >
      <Text className={`${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
