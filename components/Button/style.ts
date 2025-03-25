import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 20,
    borderRadius: 19,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    backgroundColor: Colors.primary.background,
  },
  buttonText: {
    color: Colors.primary.text,
    fontSize: 18,
  },
});
