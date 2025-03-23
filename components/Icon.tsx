import React from "react";
import Svg from "react-native-svg";

interface IconProps {
  size: number;
  color: string;
  iconPath: string;
  children?: React.ReactNode;
}
const Icon: React.FC<IconProps> = ({ size, color, iconPath, children }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      {children}
    </Svg>
  );
};

export default Icon;
