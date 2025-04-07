import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContentContainer: {
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    display: "flex",
    paddingBottom: 80,
  },
  modalHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 30,
    borderBottomColor: "rgba(226, 226, 226, 0.7)",
    borderBottomWidth: 1,
  },
  modalHeaderText: {
    fontSize: 24,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
  },
  modalListWrapper: {
    paddingHorizontal: 25,
    display: "flex",
  },
  modalListContainer: {
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(226, 226, 226, 0.7)",
    borderBottomWidth: 1,
  },
  modalListText: {
    fontSize: 18,
    color: "#7c7c7c",
    fontFamily: "Gilroy-SemiBold",
  },
  modalListActionButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  modalListActionText: {
    fontSize: 16,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
  },
  termsAndConditions: {
    marginTop: 20,
    marginBottom: 25,
    fontSize: 14,
    color: "#7C7C7C",
    fontFamily: "Gilroy-Bold",
    maxWidth: "70%",
  },
  termsAndConditionsSpan: {
    marginTop: 20,
    fontSize: 14,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
  },
});
