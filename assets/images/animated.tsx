import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

// Основной компонент
export default function BlinkingSVG() {
  // Создаем анимированное значение для цвета
  const color = useSharedValue("black");

  // Анимированные свойства для заполнения цвета
  const animatedProps = useAnimatedProps(() => ({
    fill: color.value,
  }));

  // Запускаем анимацию цвета при монтировании компонента
  useEffect(() => {
    color.value = withRepeat(
      withTiming("red", { duration: 500 }), // Переход к красному цвету за 500 мс
      -1, // Бесконечный повтор
      true, // Чередование цветов
    );
  }, [color]);

  return (
    <View style={styles.container}>
      <Svg width="106" height="85" viewBox="0 0 106 85">
        <AnimatedPath
          animatedProps={animatedProps}
          d="M13.3764 70.9757H2.36616C2.36616 71.8486 2.28983 72.7975 2.17534 73.8413C2.06085 74.9609 1.88911 75.9857 1.69829 76.9156C1.50747 77.8455 1.31665 78.5856 1.12583 79.0791L1.10675 79.136L0.877768 79.2878L0.706031 79.3637L0.419802 79.4017H0V85H3.81638V82.2862H11.1248V85H14.903V79.4017H13.3764V70.9757ZM8.94941 79.4017H5.28569L5.36202 79.136C5.74365 77.7886 6.0108 76.8397 6.12529 76.3463C6.20162 75.9857 6.25887 75.6631 6.29703 75.3974C6.33519 75.1317 6.35427 74.7901 6.35427 74.3916V74.1829H8.9685V79.4017H8.94941Z"
        />
      </Svg>
    </View>
  );
}

// Создаем анимированный компонент Path
const AnimatedPath = Animated.createAnimatedComponent(Path);

// Стили для компонента
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
