import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./style";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled,
  style,
  type = "primary",
  icon,
  iconPosition = "left",
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style]}
    >
      {icon && iconPosition === "left" && icon}
      <Text style={styles.buttonText}>{title}</Text>
      {icon && iconPosition === "right" && icon}
    </Pressable>
  );
};

export default Button;
