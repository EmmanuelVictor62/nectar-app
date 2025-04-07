import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import CheckoutModal from "@/components/CheckoutModal";
import { useCartActions } from "@/hooks/useCartActions";
import { useCartStore } from "@/stores/useCartStore";
import { styles } from "@/styles/cartStyles";
import React, { useState } from "react";
import { Animated, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const cart = useCartStore((state) => state?.cart);
  const { handleUpdateProductQuantity, removeProductFromCart } =
    useCartActions();

  const totalCartCost = cart?.reduce(
    (sum, item) => sum + item?.price * item?.quantity,
    0
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Cart</Text>
      </View>
      <View>
        <Animated.FlatList
          data={cart}
          keyExtractor={(item) => item.id}
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
              handleRemoveProductFromCart={() =>
                removeProductFromCart(item?.id)
              }
            />
          )}
          contentContainerStyle={{ paddingBottom: 115 }}
          style={styles.itemWrapper}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go To Checkout"
          onPress={() => setIsModalVisible(true)}
        />
      </View>
      <CheckoutModal
        visible={isModalVisible}
        handleCloseModal={() => setIsModalVisible(false)}
        totalCost={totalCartCost}
      />
    </SafeAreaView>
  );
};

export default Cart;
