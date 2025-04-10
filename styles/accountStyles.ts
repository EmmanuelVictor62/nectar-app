import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    color: "#181725",
    fontFamily: "Gilroy-Bold",
  },
  userEmail: {
    fontSize: 14,
    color: "#7C7C7C",
    fontFamily: "Gilroy-Regular",
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  optionLabel: {
    fontSize: 16,
    color: "#181725",
    fontFamily: "Gilroy-SemiBold",
  },
  logoutBtn: {
    flexDirection: "row",
    gap: "30%",
    backgroundColor: "#F3F4F6",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 19,
  },
  logoutText: {
    fontSize: 18,
    color: "#53B175",
    fontFamily: "Gilroy-Bold",
  },
});
