import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    gap: 25,
    flex: 1,
    height: "100%",
  },
  imageContainer: {
    width: 90,
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: 60,
    flexShrink: 0,
    resizeMode: "contain",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    flex: 1,
  },
  nameWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  name: {
    fontSize: 16,
    fontFamily: "Gilroy-Bold",
    color: "#181725",
  },
  weight: {
    fontSize: 14,
    fontFamily: "Gilroy-Regular",
    color: "#7C7C7C",
  },
  counterWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  counterButton: {
    height: 45,
    width: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E2E2E2",
    borderWidth: 1,
    borderRadius: 17,
  },
  counter: {
    fontSize: 16,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
  },
  price: {
    fontSize: 18,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
  },
});
