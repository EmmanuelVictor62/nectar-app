import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    borderColor: "#E2E2E2",
    borderWidth: 1,
    flexShrink: 0,
    width: 173,
    padding: 15,
    borderRadius: 18,
  },
  imageContainer: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    fontFamily: "Gilroy-Bold",
  },
  weight: {
    fontSize: 14,
    fontWeight: "400",
    color: "#7C7C7C",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
    fontFamily: "Gilroy-SemiBold",
  },
  addButton: {
    padding: 12,
    backgroundColor: "#53B175",
    borderRadius: 17,
  },
});
