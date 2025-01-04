import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
    display: "flex",
    gap: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 5,
  },
  headerTextContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    color: "#4C4F4D",
    fontFamily: "Gilroy-Bold",
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
  banner: {
    width: "100%",
    height: 110,
    borderRadius: 15,
  },
  categoryHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  categoryHeaderText: {
    fontSize: 24,
    color: "#181725",
    fontFamily: "Gilroy-SemiBold",
  },
  seeAllText: {
    fontSize: 16,
    color: "#53B175",
    fontFamily: "Gilroy-SemiBold",
  },
  productWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  categoryWrapper: {
    flex: 1,
    marginBottom: 4,
  },
});
