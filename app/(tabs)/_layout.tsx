import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
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
              <MaterialIcons
                name="shopping-cart-checkout"
                size={24}
                color={color}
              />
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
