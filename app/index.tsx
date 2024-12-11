// Index.tsx
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthProvider";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";

SplashScreen.preventAutoHideAsync();

const Index = () => {
  const {
    state: { userToken, loading, hasOnboarded, user },
  } = useAuth();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleNavigation = async () => {
      await SplashScreen.hideAsync();
      setIsReady(true);

      if (!userToken) {
        const onboarded =
          hasOnboarded || (await SecureStore.getItemAsync("hasOnboarded"));
        if (onboarded) {
          router.push("/(auth)/signIn");
          console.log("попал на индекс");
        } else {
          router.push("/(auth)/onbording");
        }
      } else {
        if (user?.status === "blocked") {
          router.push("/(auth)/blocked");
        } else {
          router.push("/(tabs)/dashboard");
        }
      }
    };

    if (!loading) {
      handleNavigation();
    }
  }, [loading, userToken, hasOnboarded, user, router]);

  if (loading || !isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return null;
};

export default Index;
