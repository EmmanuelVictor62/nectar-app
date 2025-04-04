import CartItem from "@/components/CartItem";
import { useCartActions } from "@/hooks/useCartActions";
import { useCartStore } from "@/stores/useCartStore";
import { styles } from "@/styles/cartStyles";
import React from "react";
import { Animated, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const cart = useCartStore((state) => state?.cart);
  const { handleUpdateProductQuantity, removeProductFromCart } =
    useCartActions();

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
            handleUpdateProductQuantity={(quantity: number) =>
              handleUpdateProductQuantity(item?.id, quantity, item?.name)
            }
            handleRemoveProductFromCart={() => removeProductFromCart(item?.id)}
          />
        )}
        style={styles.itemWrapper}
      />
    </SafeAreaView>
  );
};

export default Cart;
