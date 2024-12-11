import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const { width } = Dimensions.get("window");
const containerPadding = 16; // Отступы с краев
const cardWidth = width * 0.75; // 70% ширины экрана для центральной карточки
const cardSpacing = 16; // Расстояние между карточками
const slideHeight = 120; // Высота карточки

interface Promotion {
  id: string;
  title: string;
  text: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

interface PromoCarouselProps {
  promotions: Promotion[];
}

const PromoCarousel: React.FC<PromoCarouselProps> = ({ promotions = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const totalPages = promotions.length;

  if (totalPages === 0) {
    return <Text className="text-center">No promotions available</Text>;
  }

  // Полная ширина с учетом карточки и отступов
  const slideWidth = cardWidth + cardSpacing;

  // Обработка скроллинга пальцем
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / slideWidth); // Рассчитываем ближайший индекс
    setActiveIndex(newIndex);
  };

  // Переключение на конкретный слайд
  const scrollToSlide = (index: number) => {
    scrollViewRef.current?.scrollTo({
      x: index * slideWidth, // Рассчитываем смещение
      animated: true,
    });
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToInterval={slideWidth} // Фиксация на слайдах
        decelerationRate="fast" // Быстрая прокрутка
        contentContainerStyle={{
          paddingHorizontal: containerPadding, // Отступы слева и справа
        }}
      >
        <View className="flex-row gap-x-4">
          {promotions.map((promo) => (
            <View
              key={promo.id}
              className="rounded-lg overflow-hidden flex-row"
              style={{
                width: cardWidth,
                height: slideHeight,
                backgroundColor: promo.backgroundColor,
              }}
            >
              <View className="flex-1 p-4 justify-start">
                <Text
                  className="text-[18px] font-montserratSemiBold"
                  style={{ color: promo.textColor }}
                  numberOfLines={2}
                >
                  {promo.title}
                </Text>
                <Text
                  className="text-[14px] mt-2 font-montserrat"
                  style={{ color: promo.textColor }}
                >
                  {promo.text}
                </Text>
              </View>

              {/* Изображение */}
              <View className="w-24 justify-center items-center  bg-[#FFFFFF99]">
                <Image
                  source={{ uri: promo.image }}
                  className="w-full h-full"
                  style={{ resizeMode: "contain" }}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Индикаторы страниц */}
      <View className="flex-row justify-center py-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <View
            key={index}
            onTouchEnd={() => scrollToSlide(index)}
            className={`mx-1 w-2 h-2 rounded-full ${
              index === activeIndex
                ? "bg-white opacity-100 w-6"
                : "bg-white opacity-60"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default PromoCarousel;
