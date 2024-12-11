import React from "react";
import { View, Text } from "react-native";
import Svg, { G, Path } from "react-native-svg";

type Bonus = {
  key: string; // Название категории
  value: number; // Значение
  color: string; // Цвет
};

const DonutChart: React.FC<{
  bonuses: Bonus[];
  legend: boolean;
  size: number;
}> = ({ bonuses, legend, size }) => {
  const total = bonuses.reduce((sum, item) => sum + item.value, 0);
  const radius = size; // Внешний радиус
  const innerRadius = radius / 2; // Радиус внутреннего круга (дырки)
  const center = radius; // Центр (по x и y)

  let cumulativeAngle = 0; // Начальный угол для первого сегмента

  return (
    <View className="w-full justify-center">
      {/* Информация над графиком */}
      {legend && (
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-[#5E6265] font-montserratMedium text-[12px]">
            За весь час накопичено бонусів
          </Text>
        </View>
      )}

      {/* Диаграмма и легенда в два столбца */}
      <View className="flex-row justify-between">
        {/* Диаграмма */}
        <View className={`items-start ${legend ? "w-5/12" : ""}`}>
          <View className="relative">
            <Svg
              width={radius * 2}
              height={radius * 2}
              viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            >
              <G rotation="-90" origin={`${center}, ${center}`}>
                {bonuses.map((segment, index) => {
                  const segmentAngle = (segment.value / total) * 360; // Угол текущего сегмента
                  const startAngle = cumulativeAngle;
                  const endAngle = cumulativeAngle + segmentAngle;
                  cumulativeAngle += segmentAngle; // Обновление угла для следующего сегмента

                  const largeArcFlag = segmentAngle > 180 ? 1 : 0;

                  // Координаты начальной и конечной точек дуги
                  const x1 =
                    center + radius * Math.cos((Math.PI / 180) * startAngle);
                  const y1 =
                    center + radius * Math.sin((Math.PI / 180) * startAngle);

                  const x2 =
                    center + radius * Math.cos((Math.PI / 180) * endAngle);
                  const y2 =
                    center + radius * Math.sin((Math.PI / 180) * endAngle);

                  return (
                    <Path
                      key={index}
                      d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${
                        center +
                        innerRadius * Math.cos((Math.PI / 180) * endAngle)
                      } ${
                        center +
                        innerRadius * Math.sin((Math.PI / 180) * endAngle)
                      } A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${
                        center +
                        innerRadius * Math.cos((Math.PI / 180) * startAngle)
                      } ${
                        center +
                        innerRadius * Math.sin((Math.PI / 180) * startAngle)
                      } Z`}
                      fill={segment.color}
                    />
                  );
                })}
              </G>
            </Svg>

            {/* Текст внутри диаграммы */}
            <View
              style={{
                position: "absolute",
                width: innerRadius * 2,
                height: innerRadius * 2,
                top: radius - innerRadius,
                left: radius - innerRadius,
              }}
              className="items-center justify-center"
            ></View>
          </View>
        </View>

        {/* Легенда */}
        {legend && (
          <View className="flex-1 items-start justify-center">
            <Text className="text-[20px] font-montserratSemiBold text-[#01020299] mb-2">
              {total.toFixed(2)} грн
            </Text>
            {bonuses.map((item, index) => (
              <View key={index} className="w-full">
                {/* Ряд: кружок, категория и цифра */}
                <View className="flex-row items-center justify-between">
                  {/* Кружок цвета */}
                  <View
                    style={{ backgroundColor: item.color }}
                    className="w-2 h-2 rounded-full mr-2"
                  />
                  {/* Категория */}
                  <Text className="flex-1 text-[#01020266] font-montserrat text-[12px]">
                    {item.key}
                  </Text>
                  {/* Цифра цвета легенды */}
                  <Text
                    className="text-[14px] font-montserrat"
                    style={{ color: item.color }}
                  >
                    {item.value.toFixed(2)} грн
                  </Text>
                </View>
                {/* Подчеркивание, кроме последней строки */}
                {index < bonuses.length - 1 && (
                  <View className="border-b border-[#D3ECF6] mt-1 mb-1" />
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default DonutChart;
