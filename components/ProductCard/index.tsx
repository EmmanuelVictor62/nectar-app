import { images } from "@/utils/images";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { styles } from "./style";

interface ProductCardProps {
  id: string;
  image: string;
  productName: string;
  quantity: number;
  weight?: string;
  price: number;
  style?: ViewStyle;
  addProductToCart: () => void;
  updateProductInCart: (quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  productName,
  weight,
  price,
  quantity,
  style,
  addProductToCart,
  updateProductInCart,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Link
        href={{ pathname: "/product/[id]", params: { id } }}
        style={styles.imageContainer}
      >
        <Image source={images[image]} alt="product" style={styles.image} />
      </Link>
      <Text style={styles.productName}>{productName} </Text>
      <Text style={styles.weight}>{weight} </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`\u0024 ${price}`} </Text>
        {quantity < 1 ? (
          <Pressable style={styles.addButton} onPress={addProductToCart}>
            <MaterialIcons name="add" color={"#fff"} size={24} />
          </Pressable>
        ) : (
          <View style={styles.counterContainer}>
            <Pressable
              style={styles.counterButton}
              onPress={() => updateProductInCart(quantity - 1)}
            >
              <MaterialIcons name="remove" size={18} color={"#B3B3B3"} />
            </Pressable>
            <Text style={styles.counter}>{quantity} </Text>
            <Pressable
              style={styles.counterButton}
              onPress={() => updateProductInCart(quantity + 1)}
            >
              <MaterialIcons name="add" size={18} color={"#53B175"} />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default ProductCard;
