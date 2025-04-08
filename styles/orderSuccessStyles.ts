import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 25,
    flex: 1,
  },
  image: {
    height: 210,
    width: 230,
  },
  heading: {
    fontSize: 28,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
    marginTop: 70,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 16,
    color: "#7C7C7C",
    fontFamily: "Gilroy-Regular",
    marginTop: 20,
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    marginTop: "auto",
  },
});
