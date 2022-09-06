import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { Animated, View, Dimensions } from "react-native";
import { MonoText } from "../StyledText";
import iconMap from "./tabIcons";

import * as S from "./styles";
import tabIcons from "./tabIcons";

const { width, height } = Dimensions.get("window");

const MIN_HEIGHT = 667;
const isMinHeight = height <= MIN_HEIGHT;

export default function TabNavigation({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) {
  const translateX = useRef(new Animated.Value(0)).current;
  const dimension = useRef(new Animated.Value(0)).current;
  const iconY = useRef(new Animated.Value(0)).current;
  const tabWidth = width / state.routes.length;

  const translateTab = (index: number) => {
    Animated.spring(translateX, {
      toValue: index * tabWidth,
      useNativeDriver: true,
      speed: 2
    }).start();

    iconY.setValue(0);
    Animated.timing(iconY, {
      toValue: isMinHeight ? -16 : -20,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  const _getIcon = (routename: string) => tabIcons[routename];

  useEffect(() => {
    translateTab(state.index);
  }, [state.index]);

  return (
    <S.Container deviceMinHieght={isMinHeight}>
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          width: tabWidth,
          height: 114,
          justifyContent: "flex-start",
          alignItems: "center",
          transform: [{ translateX }]
        }}
      >
        <S.Indicator deviceMinHieght={isMinHeight} />
        <S.IndicatorCircle
          deviceMinHieght={isMinHeight}
          style={{ transform: [{ scale: dimension }] }}
        />
      </Animated.View>

      {state.routes.map((route, index: number) => {
        const active = index === state.index;
        return (
          <S.TabItem
            key={index}
            onPress={() => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true
              });
              if (state.index !== index && !event.defaultPrevented)
                navigation.navigate(route.name);
            }}
          >
            <View style={{ alignItems: "center", opacity: active ? 1 : 0.7 }}>
              <Animated.View
                style={{ transform: [{ translateY: active ? iconY : 0 }] }}
              >
                <S.ItemIcon name={_getIcon(route.name)} active={active} />
              </Animated.View>
              <MonoText>{route.name}</MonoText>
            </View>
          </S.TabItem>
        );
      })}
    </S.Container>
  );
}
