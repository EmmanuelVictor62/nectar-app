import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 14,
    zIndex: 999,
    elevation: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },
  message: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Gilroy-SemiBold",
    maxWidth: "80%",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
    overflow: "hidden",
  },
});
