import styled from "styled-components/native";
import { Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import IndicatorSvg from "../../assets/icons";

export const Container = styled.View`
  flex-direction: row;
  background-color: tomato;
  height: 84px;
  width: 100%;
  padding: 16px 0;

  ${({ minHeight }: { minHeight: string }) =>
    minHeight &&
    `
    height: 64px;
    padding: 8px 0;
  `}
`;

export const TabItem = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0 8px;
  flex: 1;
`;

export const ItemIcon = styled(FontAwesome).attrs(
  (props: { active?: boolean }) => ({
    size: 24
  })
)`
  margin-bottom: 8px;
`;

export const Indicator = styled(IndicatorSvg).attrs({
  width: 92,
  height: 114,
  fill: "tomato"
})``;

export const IndicatorCircle = styled(Animated.View)`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background-color: white;
  position: absolute;
  top: ${(props: { minHeight?: number }) => (props.minHeight ? "24px" : "8px")};
`;
