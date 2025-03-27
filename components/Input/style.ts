import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7C7C7C",
    fontFamily: "Gilroy-Bold",
    marginBottom: 8,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    width: "100%",
    paddingBottom: 10,
  },
  input: {
    fontSize: 18,
    fontWeight: "400",
    color: "#181725",
    fontFamily: "Gilroy-Regular",
    paddingVertical: 0,
    paddingHorizontal: 0,
    flex: 1,
  },
  errorText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#FF0000",
    fontFamily: "Gilroy-Regular",
    marginTop: 5,
  },
  message: {},
});
