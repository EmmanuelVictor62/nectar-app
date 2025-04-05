import { useCartStore } from "@/stores/useCartStore";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  const cartItemsCount = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#53B175",
          tabBarLabelStyle: { fontSize: 12, fontFamily: "Gilroy-SemiBold" },
          tabBarStyle: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
        }}
      >
        <Tabs.Screen
          name="shop"
          options={{
            title: "Shop",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="storefront" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="manage-search" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <View style={styles.cartIconContainer}>
                <MaterialIcons
                  name="shopping-cart-checkout"
                  size={24}
                  color={color}
                />
                {cartItemsCount > 0 && (
                  <View style={styles.cartIconCounter}>
                    <Text style={styles.cartIconCounterText}>
                      {cartItemsCount}
                    </Text>
                  </View>
                )}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person-outline" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  cartIconContainer: {
    position: "relative",
  },
  cartIconCounter: {
    position: "absolute",
    top: -4,
    right: -10,
    backgroundColor: "#53B175",
    borderRadius: "50%",
    paddingHorizontal: 4,
    paddingVertical: 3,
    minWidth: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  cartIconCounterText: {
    color: "white",
    fontSize: 10,
    fontFamily: "Gilroy-SemiBold",
  },
});
