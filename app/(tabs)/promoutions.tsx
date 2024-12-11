import { ImageBackground, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import LoyaltyInfo from "@/components/promoution/LoyaltyInfo";
import { useAuth } from "@/contexts/AuthProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Promoutions = () => {
  const { state } = useAuth();
  const { user } = state;
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsRedirecting(true);
      router.push("/(auth)/signIn");
    }
  }, [user, router]);

  if (isRedirecting || !user) {
    return <ActivityIndicator size="large" color="#0091CB" />;
  }

  const { cashback, dateActivation } = user;
  const now = Date.now();
  const days = dateActivation
    ? Math.floor((now - dateActivation) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <ImageBackground
      className="h-full"
      source={require("@/assets/images/BG.png")}
    >
      <SafeAreaView className="pt-4">
        <LoyaltyInfo
          dateActivation={dateActivation ?? 0}
          days={days}
          cashback={cashback}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Promoutions;
