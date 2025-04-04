import { images } from "@/utils/images";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { styles } from "./style";

interface CartItemProps {
  image: string;
  itemName: string;
  quantity: number;
  weight: string;
  price: number;
  handleUpdateProductQuantity: (quantity: number) => void;
  handleRemoveProductFromCart: () => void;
}
const CartItem: React.FC<CartItemProps> = ({
  image,
  itemName,
  quantity,
  weight,
  price,
  handleRemoveProductFromCart,
  handleUpdateProductQuantity,
}) => {
  const productImage = images[image];
  return (
    <Animated.View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={productImage} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.nameWrapper}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{itemName} </Text>
            <Text style={styles.weight}>Weight: {weight}</Text>
          </View>
          <MaterialIcons
            name="close"
            size={20}
            color={"#B3B3B3"}
            onPress={handleRemoveProductFromCart}
          />
        </View>
        <View style={styles.counterWrapper}>
          <View style={styles.counterContainer}>
            <Pressable
              style={styles.counterButton}
              onPress={() => handleUpdateProductQuantity(quantity - 1)}
            >
              <MaterialIcons name="remove" size={22} color={"#B3B3B3"} />
            </Pressable>
            <Text style={styles.counter}>{quantity} </Text>
            <Pressable
              style={styles.counterButton}
              onPress={() => handleUpdateProductQuantity(quantity + 1)}
            >
              <MaterialIcons name="add" size={22} color={"#53B175"} />
            </Pressable>
          </View>
          <Text style={styles.price}>{`\u0024 ${price * quantity}`}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default CartItem;
