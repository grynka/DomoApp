import { Tabs } from "expo-router";
import { Platform, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTheme } from "@/contexts/ThemeProvider";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface TabIconProps {
  name: string;
  color: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ name, color, focused }) => {
  return (
    <View className="items-center">
      <FontAwesome5 name={name} size={24} color={color} />
    </View>
  );
};

const TabLayout: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const { t } = useTranslation();

  const tabBarStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    borderTopColor: theme === "light" ? "#ccc" : "gray",
    borderTopWidth: 1,
    elevation: 5, // Shadow for Android
    height: Platform.OS === "android" ? 56 : 50 + insets.bottom, // Height including bottom inset
  };

  return (
    <>
      <StatusBar />
      <Tabs
        screenOptions={{
          tabBarStyle,
          tabBarActiveTintColor: "#0091CB",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 10, // Font size for tab labels
            fontFamily: "montserratMedium", // Custom font (if loaded via `expo-font`)
          },
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="th-large" color={color} focused={focused} />
            ),
            tabBarLabel: t("Dashboard"),
          }}
        />
        <Tabs.Screen
          name="finance"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="coins" color={color} focused={focused} />
            ),
            tabBarLabel: t("Finance"),
          }}
        />
        <Tabs.Screen
          name="services"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="globe" color={color} focused={focused} />
            ),
            tabBarLabel: t("Services"),
          }}
        />
        <Tabs.Screen
          name="promoutions"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="gift" color={color} focused={focused} />
            ),
            tabBarLabel: t("Promoutions"),
          }}
        />
        <Tabs.Screen
          name="diagnostic"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="tools" color={color} focused={focused} />
            ),
            tabBarLabel: t("Diagnostic"),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
