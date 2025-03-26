import LottieView from "lottie-react-native";
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
        <LottieView
          source={require("@/assets/icons/loadingSpinner.json")}
          autoPlay
          loop
          style={{ width: "100%", height: 24 }}
        />
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
