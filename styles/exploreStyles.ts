import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 30,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 70,
    backgroundColor: "#fff",
  },
  productWrapperColumn: {
    gap: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 16,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#F2F3F2",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#7C7C7C",
    fontFamily: "Gilroy-SemiBold",
  },
});
