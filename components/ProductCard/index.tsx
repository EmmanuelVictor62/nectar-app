import { images } from "@/data/images";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./style";

interface ProductCardProps {
  image: string;
  productName: string;
  weight?: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  productName,
  weight,
  price,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images[image]} alt="product" style={styles.image} />
      </View>
      <Text style={styles.productName}>{productName} </Text>
      <Text style={styles.weight}>{weight} </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`\u0024 ${price}`} </Text>
        <Pressable style={styles.addButton}>
          <MaterialIcons name="add" color={"#fff"} size={24} />
        </Pressable>
      </View>
    </View>
  );
};

export default ProductCard;
