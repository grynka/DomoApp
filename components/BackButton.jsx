import React from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeProvider";

const Back = ({ page }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => {
        if (page) {
          router.push(page); // Перехожу по заданному пути
        } else {
          router.back(); // Возвращаюсь на предыдущую страницу
        }
      }}
      className="w-14 h-10 self-start absolute justify-center items-start top-12 left-4"
    >
      <AntDesign
        name="arrowleft"
        size={24}
        color={theme === "light" ? "black" : "white"}
      />
    </TouchableOpacity>
  );
};

export default Back;
