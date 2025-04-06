import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#fff",
    position: "relative",
    height: "100%",
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
    paddingBottom: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
  },
  itemWrapper: {
    paddingHorizontal: 20,
    height: "100%",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    paddingHorizontal: 24,
  },
});
