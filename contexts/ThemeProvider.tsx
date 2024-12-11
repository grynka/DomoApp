import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useAuth } from "@/contexts/AuthProvider";

// Создаем контекст для темы
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode; // Явно указываем тип для children
}

// Провайдер темы
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { state, updateUser } = useAuth();
  const { user } = state;

  // Инициализируем тему из данных пользователя
  const [theme, setTheme] = useState(user?.theme || "light");

  useEffect(() => {
    // Если тема в данных пользователя обновляется, синхронизируем ее
    setTheme(user?.theme || "light");
  }, [user?.theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Обновляем тему в данных пользователя
    updateUser({ theme: newTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для доступа к контексту темы
export const useTheme = () => useContext(ThemeContext);
