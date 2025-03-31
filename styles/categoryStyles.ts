import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 30,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 70,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "35%",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Gilroy-Bold",
    color: "#181725",
  },
  productWrapperColumn: {
    gap: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  productWrapper: {
    // marginBottom: 80,
  },
});
