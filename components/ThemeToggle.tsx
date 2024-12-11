import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme} className="mx-4">
      {theme === "light" ? (
        <Feather name="moon" size={28} color="black" /> // Иконка для светлой темы
      ) : (
        <Feather name="sun" size={28} color="white" /> // Иконка для тёмной темы
      )}
    </TouchableOpacity>
  );
};

export default ThemeToggle;
