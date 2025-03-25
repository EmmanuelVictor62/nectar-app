import LoadingIcon from "@/assets/icons/loadingSpinner.svg";
import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";
import { styles } from "./style";

interface ButtonProps {
  loading?: boolean;
  title: string;
  onPress: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  loading,
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
      {loading ? (
        <LoadingIcon width={20} height={20} />
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          <Text style={styles.buttonText}>{title}</Text>
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </Pressable>
  );
};

export default Button;
