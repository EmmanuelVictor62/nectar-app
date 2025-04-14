import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  imageContainer: {
    height: 350,
    backgroundColor: "#F2F3F2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: "90%",
    height: 200,
    resizeMode: "contain",
  },
  content: {
    padding: 16,
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: 20,
    color: "#181725",
  },
  subtitle: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    color: "#7C7C7C",
  },
  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  counterBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    marginHorizontal: 16,
  },
  price: {
    marginLeft: "auto",
    fontFamily: "Gilroy-Bold",
    fontSize: 20,
    color: "#181725",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  accordionTitle: {
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    color: "#181725",
  },
  description: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 8,
    lineHeight: 20,
  },
  reviewRow: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
  },
  button: {
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: 60,
  },
});
