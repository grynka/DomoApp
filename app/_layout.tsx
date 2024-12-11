import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { AuthProvider } from "@/contexts/AuthProvider"; // Импортируем AuthProvider
import I18nProvider from "@/i18n/i18n";
import { ThemeProvider } from "@/contexts/ThemeProvider"; // Импортируем новый ThemeProvider
import "../global.css";

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    MontserratRegular: require("@/assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
    MontserratMedium: require("@/assets/fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("@/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const router = useRouter();

  // Подписка на уведомления и запрос разрешений объединены
  useEffect(() => {
    const setupNotifications = async () => {
      // Запрос на разрешение для уведомлений
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
      }

      // Подписка на обработку уведомлений
      const subscription =
        Notifications.addNotificationResponseReceivedListener((response) => {
          const data = response.notification.request.content.data;
          if (data?.screen) {
            router.push(`../${data.screen}`);
          }
        });

      return () => subscription.remove();
    };

    setupNotifications();
  }, [router]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Splash screen remains visible until fonts are loaded
  }

  return (
    <AuthProvider>
      <I18nProvider>
        <ThemeProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </I18nProvider>
    </AuthProvider>
  );
}
