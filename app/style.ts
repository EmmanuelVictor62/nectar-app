import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  imgBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingBottom: "22%",
  },
  contentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
  },
  icon: {
    height: 56,
    width: 48,
    marginBottom: 35,
  },
  textHeading: {
    fontSize: 48,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.primary.text,
    maxWidth: "75%",
    fontFamily: "Gilroy-SemiBold",
    marginBottom: 10,
  },
  textSubheading: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: "rgba(252, 252, 252, 0.7)",
    fontFamily: "Gilroy-Regular",
    marginBottom: 20,
  },
});
