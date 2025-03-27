import CancelIcon from "@/assets/icons/cancel.svg";
import CheckMarkIcon from "@/assets/icons/check-circle.svg";
import InfoIcon from "@/assets/icons/info-circle.svg";
import ErrorIcon from "@/assets/icons/triangle.svg";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "info";
  handleCloseAlert?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = "success",
  handleCloseAlert,
}) => {
  const backgroundColor = {
    success: "#4CAF50",
    error: "#F44336",
    info: "#E1C16C",
  }[type];

  const icon = {
    success: <CheckMarkIcon width={16} height={16} />,
    error: <ErrorIcon width={16} height={16} />,
    info: <InfoIcon width={16} height={16} />,
  }[type];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.iconContainer}>
        {icon}
        <Text style={styles.message}>{message}</Text>
      </View>
      <CancelIcon width={16} height={16} onPress={handleCloseAlert} />
    </View>
  );
};

export default Alert;
