import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingHorizontal: 25,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "40%",
  },
  textContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    marginTop: 20,
  },
  textHeading: {
    fontSize: 26,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
    fontWeight: "600",
  },
  textDescription: {
    fontSize: 16,
    color: "#7C7C7C",
    fontFamily: "Gilroy-Regular",
    fontWeight: "400",
  },
  inputWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 30,
    marginTop: 30,
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 25,
    marginTop: 20,
  },
  forgotPasswordLink: {
    fontSize: 14,
    color: "#181725",
    fontFamily: "Gilroy-Regular",
    textAlign: "right",
  },
  signUpLinkContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpLinkText: {
    fontSize: 14,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
  },
  signUpLink: {
    fontSize: 14,
    color: Colors.primary.background,
    fontFamily: "Gilroy-Bold",
  },
  termsOfService: {
    fontSize: 14,
    color: "#7C7C7C",
    fontFamily: "Gilroy-Regular",
    textAlign: "left",
    lineHeight: 20,
  },
});
