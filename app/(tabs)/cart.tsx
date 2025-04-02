import CartItem from "@/components/CartItem";
import { useCartStore } from "@/stores/useCartStore";
import { styles } from "@/styles/cartStyles";
import React from "react";
import { Animated, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const cart = useCartStore((state) => state?.cart);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Cart</Text>
      </View>
      <Animated.FlatList
        data={cart}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <CartItem
            itemName={item?.name}
            quantity={item?.quantity}
            weight={item?.weight}
            price={item?.price}
            image={item?.image}
          />
        )}
        style={styles.itemWrapper}
      />
    </SafeAreaView>
  );
};

export default Cart;
